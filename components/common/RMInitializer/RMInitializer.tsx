"use client";

import { useEffect } from "react";
import { useRMStore } from "@/store/RickAndMortyStore";

const RMInitializer = () => {
  const loadAllData = useRMStore(state => state.loadAllData);
  const isLoaded = useRMStore(state => state.loaded);

  useEffect(() => {
    if (!isLoaded) {
      loadAllData();
    }
  }, [isLoaded]);

  return null;
};

export default RMInitializer;
