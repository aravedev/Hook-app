import React from "react";
import useFetch from "../hooks/useFetch";
import useCounter from "../hooks/useCounter";
import { LoadingQuote, Quote } from "../03-examples";

//import Quote from "./Quote";
//import LoadingQuote from "./LoadingQuote";

export default function Layout() {
  const { counter, increment } = useCounter();
  const { data, isLoading, hasError } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );

  return (
    <>
      <h1>Breaking Quotes</h1>
      <hr />
      {isLoading ? (
        <LoadingQuote></LoadingQuote>
      ) : (
        <Quote quote={data[0].quote} author={data[0].author}></Quote>
      )}

      <button
        className="btn btn-primary"
        onClick={() => increment()}
        disabled={isLoading}
      >
        Next Quote
      </button>
    </>
  );
}

/*
<div className="alert alert-info text-center">Loading....</div>
:

<blockquote className="blockquote text-end">
          <p className="mb-1">{data[0].quote}</p>
          <footer className="blockquote-footer mt-2">{data[0].author}</footer>
        </blockquote>

*/
