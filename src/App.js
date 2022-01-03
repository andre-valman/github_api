import React from "react";
import Layout from "./Components/layout";
import NoSearch from "./Components/no-search";
import Profile from "./Components/profile";
import Repositories from "./Components/repositories";
import  {ResetCSS}  from "./global/resetCSS";
import useGithub from "./hooks/github-hooks";


function App() {
  const {githubState} = useGithub();
  return (
    <main>
     
        <ResetCSS></ResetCSS>
          <Layout>
            {githubState.hasUser ? (
              <>
                {githubState.loading ? (
                  <p>Loading...</p>
                  ) : (
                    <>
                      <Profile/>
                      <Repositories/>
                    </>
                  )}
              </>
              ) : (
                <NoSearch/>
              )}
            
          </Layout>
      
    </main>
  );
}

export default App;
