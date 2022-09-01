import React, { useState } from "react";
import { useEffect } from "react";

export default function useFetch(url) {
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    hasError: null,
  });

  const getFetch = async () => {
    // Informing that the request is loading the data

    setState({ ...state, isLoading: true });

    const resp = await fetch(url);
    const data = await resp.json();
    setState({
      data: data,
      isLoading: false,
      hasError: null,
    });
  };

  useEffect(() => {
    getFetch();
    return () => {};
  }, [url]);

  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError,
  };
}
