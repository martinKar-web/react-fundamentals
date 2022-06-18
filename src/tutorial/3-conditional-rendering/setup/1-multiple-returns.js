import React, {useState, useEffect} from "react";
const url = "https://api.github.com/users/QuincyLarson";

const MultipleReturns = () => {
  const [isloading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState("default user");

  //const getUser = async () => {
  //  const response = await fetch(url);
  //  const user = await response.json();
  //  setUser(user);
  //};

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (res.status >= 200 && res.status <= 299) {
          return res.json();
        } else {
          setIsLoading(false);
          setIsError(true);
          throw new Error(res.statusText);
        }
      })
      .then((user) => {
        const {login} = user;
        setUser(login);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  if (isloading)
    return (
      <>
        <h1>Loading...</h1>
      </>
    );
  if (isError)
    return (
      <>
        <h1>There was an error!</h1>
      </>
    );

  return (
    <>
      <h1>{user}</h1>
    </>
  );
};

export default MultipleReturns;
