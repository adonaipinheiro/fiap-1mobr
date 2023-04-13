import { useState } from "react";
import { Services } from ".";

export function useServices() {
  const [loading, setLoading] = useState<boolean>(false);

  async function getUserInfo(userName: string) {
    setLoading(true);
    try {
      return await Services.getUserInfo(userName);
    } finally {
      setLoading(false);
    }
  }

  async function getUserRepos(userName: string) {
    setLoading(true);
    try {
      return await Services.getUserRepos(userName);
    } finally {
      setLoading(false);
    }
  }

  return {
    loading,
    getUserInfo,
    getUserRepos,
  };
}
