"use client";

import { useState, useEffect } from "react";
import Loader from "@/components/elements/Loader";

export default function LoaderContainer({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return loading ? <Loader /> : children;
}
