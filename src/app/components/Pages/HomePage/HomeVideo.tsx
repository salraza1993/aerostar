import { PageData } from "@/Interfaces/CommonTypes";
import { GET_HOME_VIDEO } from "@/Interfaces/HomePageQueries";
import { HomeVideoQueryData } from "@/Interfaces/HomePageQueryTypes";
import { graphqlRequest } from "@/lib/graphqlRequest";

export default async function HomeVideo() {
  const response = await graphqlRequest<PageData<HomeVideoQueryData>>(GET_HOME_VIDEO);
  const videoData = response?.pages?.edges[0]?.node?.homePage?.video;
  return <section className="home-video-section">
    <video loop autoPlay muted>
      <source src={videoData.videoUrl} type="video/mp4" />
      <span>Your browser does not support the video tag.</span>
    </video>
    <div className="video-content">{ videoData.title }</div>
  </section>
}
