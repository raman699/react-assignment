import { useEffect, useState } from "react";
import "./App.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function App() {
  const [image, setImage] = useState();
  const [searchInput, setSearchInput] = useState("");
  const [githubName, setGitHubName] = useState();
  const [repo, setRepo] = useState();
  const searchBar = () => {};

  async function repoDataURL() {
    
    // Fetch the Github User Profile
    fetch("https://api.github.com/users/"+githubName)
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          setImage(result.avatar_url);
          setGitHubName(result.login);
        },
        (error) => {
          console.log(error);
        }
      );
      
    //Get repo data about github user
    await fetch("https://api.github.com/users/"+githubName+"/repos")
      .then((res) => res.json())
      .then(
        (result) => {
          const list = result.map((item) => (
            <div className="text-center">
              <a target="_blank" href={item.svn_url}>
                {item.name}
              </a>
            </div>
          ));
          setRepo(list);
        },
        (error) => {
          console.log(error);
        }
      );
  }

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
    setGitHubName(e.target.value);
    console.log('raman11'+githubName);
  };


  return (
    <div className="App w-100 min-vh-100 justify-content-center align-items-center d-flex flex-column">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
        <input data-testid="text"  type="text" placeholder="Search here" onChange={handleChange} value={searchInput} />
          <Button   data-testid="submit" variant="primary" onClick={repoDataURL} style={{margin: "10px 0px"}} >
            Click! to fetch all public repos
          </Button>
        </Card.Body>
      </Card>
      {repo}
    </div>
  );
}

export default App;
