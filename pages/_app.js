/* it's run everytime the site is run*/
import '../styles/globals.css'

import { storyblokInit, apiPlugin } from "@storyblok/react";
import Person from "../components/genericComponents/Person/Person";
import Experience from '../components/genericComponents/Experience/Experience';


const components = { /* inside of this variable there is a mapping: person, experience*/
  person: Person, /* person and experience without the capital letter are the blocks we receive from storyblok, it is a connection between storyblok and our code, it loads the Person and Experience pages*/
  experience: Experience
};

storyblokInit({
  accessToken: `${process.env.STORYBLOK_API_KEY}`,
  use: [apiPlugin],
  components,
});

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
