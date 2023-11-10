// Currenty Unused
import React, { useEffect, useState } from "react";

import axios from "axios";

export default function useFetchMenuItems() {
  const [data, setData] = useState<any | any[]>();
  const [error, setError] = useState<any | any[]>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    async function fetchData(){
      setIsLoading(true);
      try {
        axios.post('/api/menu/getallitems')
        .then(response => {
            let menuItemData = response.data.data;
            setData(menuItemData);
          })
        .catch(error => {
          console.log(error);
        })
        .finally(() => {
          setIsLoading(() => false);
        })
      } catch(err: any) {
        setData(null);
        setError(err);
      }
    }
  }, [])

  return { isLoading, error, data }
}
