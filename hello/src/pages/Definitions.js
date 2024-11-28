/** @format */
import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import NotFound from "../componets/notFound";
import DefinitionSearch from "../componets/definitionSearch";

export default function Definition() {
  const [word, setWord] = useState();
  const navigate = useNavigate();
  const [notFound, setNotFound] = useState(false);
  const [error, setError] = useState(false);
  let { search } = useParams();

  useEffect(() => {
    fetch("https://api.dictionaryapi.dev/api/v2/entries/en/" + search)
      .then((response) => {
        if (response.status === 404) {
          setNotFound(true);
        }

        if (!response.ok) {
          setError(true);
        }

        return response.json();
      })
      .then((data) => {
        setWord(data[0].meanings);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);
  if (notFound === true) {
    return (
      <>
        <NotFound />
        <Link to='/dictionary'>Seach another</Link>
      </>
    );
  }

  if (error === true) {
    return (
      <>
        <p>Something went wrong try again</p>
        <Link to='/dictionary'>Seach another</Link>
      </>
    );
  }

  return (
    <>
      {word ? (
        <>
          <h1>Here is the definition:</h1>
          {word.map((meanings) => {
            return (
              <p key={uuidv4()}>
                {meanings.partOfSpeech} : {meanings.definitions[0].definition}
              </p>
            );
          })}
          <p>Search again</p>
          <DefinitionSearch />
        </>
      ) : null}
    </>
  );
}
