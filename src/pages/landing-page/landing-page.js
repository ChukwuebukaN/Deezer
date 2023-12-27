import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  searchedArtiste,
  searchedTerm,
  searchIsLoading,
  setCurrentSearchDetails,
} from "../../redux/search/searchSlice";
import ArtisteCard from "../../components/cards/artistes-card";
import Header from "../../components/header/header";
import { handleOnChangeSearchArtistes } from "../../components/header/header.helpers";

function LandingPage() {
  const dispatch = useDispatch();
  const isSearchedArtiste = useSelector(searchedArtiste);
  const isSearchedTerm = useSelector(searchedTerm);
  const isSearchIsLoading = useSelector(searchIsLoading);

  useEffect(() => {
    const ac = new AbortController();

    document.title = "Deezer Music • Search";

    handleOnChangeSearchArtistes("Burna", dispatch, setCurrentSearchDetails);

    return function cleanup() {
      ac.abort();
    };
  }, []);

  /** Display Fetched Artiste Cards */
  const displayFetchedArtisteCards = () => {
    return isSearchedArtiste?.map((fetchedArtistes) => (
      <div key={fetchedArtistes.id}>
        <ArtisteCard className="zoom-in" fetchedArtistes={fetchedArtistes} />
      </div>
    ));
  };

  return (
    <div>
      <Header />
      <section className=" px-[16px] md:px-[60px] lg:px-[60px]">
        <p className="text-3xl md:text-4xl lg:text-5xl mt-14 mb-6 text-center font-MabryProBold">
          {isSearchedTerm ? `Searching ${isSearchedTerm} ` : "Search Artistes "}
          on Deezer Music
        </p>

        {isSearchIsLoading === true ? (
          <div className="pt-60 flex items-center justify-center">
            <p className="text-lg md:text-xl lg:text-2xl text-center font-MabryProMedium">
              Searching...
            </p>
          </div>
        ) : isSearchIsLoading === false ? (
          <span />
        ) : (
          <div className="pt-60 flex items-center justify-center">
            <div className="text-center">
              <p className="ext-lg md:text-xl lg:text-2xl text-center font-MabryProBold mb-4">
                Click the below link to allow access to Deezer&apos;s API, then
                refresh.
              </p>
              <a
                className="text-deezer-orange  font-MabryProMedium"
                target="_blank"
                href="https://cors-anywhere.herokuapp.com/https://api.deezer.com/"
                rel="noreferrer"
              >
                https://cors-anywhere.herokuapp.com/https://api.deezer.com/
              </a>
            </div>
          </div>
        )}

        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full place-items-center mb-6 mt-10">
          {displayFetchedArtisteCards()}
        </div>
      </section>
    </div>
  );
}

export default LandingPage;
