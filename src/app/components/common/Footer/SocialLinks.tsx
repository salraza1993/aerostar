import { GET_SOCIAL_MEDIA_LISTS, SocialMediaListsDataTypes, SocialMediaNodeTypes } from "@/Interfaces/SocialMedia";
import { graphqlRequest } from "@/lib/graphqlRequest";

export default async function SocialLinks() {  
  const response = await graphqlRequest<SocialMediaListsDataTypes>(GET_SOCIAL_MEDIA_LISTS);
  const data = response?.socialLinks?.edges;
  return <div className="social-media-group">
    <ul className="social-media">
      {
        data.map((item: SocialMediaNodeTypes, index: number) => (
          <li key={index} className="social-media__item">
            <a className='social-media__item__link' href={item.node.socialMedia.url} target="_blank" rel="noopener noreferrer">
              <span dangerouslySetInnerHTML={{ __html: item.node.socialMedia.icon }}></span>
            </a>
          </li>
        ))
      }
    </ul>
  </div>
}
