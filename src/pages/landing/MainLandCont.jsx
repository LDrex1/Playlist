import React from "react";
import { Grid } from "@mui/material";
import NowPlaying from "../../components/now-playing/NowPlaying";
import TrendingBox from "../../components/trending/TrendingBox";
import MusicContent from "./MusicContent";
import { useGetTop200Query } from "../../features/api/spotifyApi";

function MainLandCont() {
  const list = ["top Songs", "billboard topcharts"];
  const { data, isFetching, error } = useGetTop200Query({});
  try {
    console.log(data);
    const { trackMetadata } = data[0];
    const {
      trackName: name,
      trackUrl: url,
      displayImageUri: image,
      artists: allArtists,
    } = trackMetadata;
    const artistName = allArtists.reduce((acc, { name }) => {
      return acc + name + " ";
    }, "");
  } catch (err) {
    console.log(err.message);
    // error = true;
  }
  return (
    <>
      {isFetching ? (
        <div>loading..</div>
      ) : error ? (
        <div>error</div>
      ) : (
        <Grid container justifyContent={"space-between"}>
          <Grid item md={12}>
            <TrendingBox name={name} image={image} artistName={artistName} />
          </Grid>
          <Grid item mt={5} md={7.6}>
            <MusicContent list={list} data={data} />
          </Grid>
          <Grid item mt={5} md={4}>
            <NowPlaying />
          </Grid>
        </Grid>
      )}
    </>
  );
}

export default MainLandCont;
