"use client";

import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import api from '../service/axios';
import MagazineViewer from './components/MagazineViewer';

export default function Page() {
  const [magazine, setMagazine] = useState(null);

  const { data, isLoading } = useQuery({
    queryKey: ["magazines"],
    queryFn: async () => {
      const res = await api.get(`/admin/magazine`);
      return res.data?.data || [];
    },
  });

  useEffect(() => {
    if (data ) {
      setMagazine(data); // প্রথম magazine
    }
  }, [data]);

  if (isLoading) return <div>Loading...</div>;

  if (!magazine) return <div>No magazine found</div>;

  return <MagazineViewer pages={magazine[0] || []} />;
}