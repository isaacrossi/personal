import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { client } from "../client";
import BlockContent from "@sanity/block-content-to-react";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(client);
function urlFor(source) {
  return builder.image(source);
}

const OnePost = () => {
  const [postData, setPostData] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    client
      .fetch(
        `*[slug.current == $slug]{
          title,
          slug,
          mainImage{
            asset->{
              _id,
              url
             }
           },
         body,
        "name": author->name,
        "authorImage": author->image
       }`,
        { slug }
      )
      .then((data) => setPostData(data[0]))
      .catch(console.error);
  }, [slug]);

  if (!postData) return <div>Loading...</div>;

  return (
    <div>
      <div>
        <h2>{postData.title}</h2>
        <div>
          <h4>{postData.name}</h4>
        </div>
      </div>
      <img src={urlFor(postData.mainImage).width(200).url()} alt="" />
      <div>
        <BlockContent
          blocks={postData.body}
          projectId={client.projectId}
          dataset={client.dataset}
        />
      </div>
    </div>
  );
};

export { OnePost };
