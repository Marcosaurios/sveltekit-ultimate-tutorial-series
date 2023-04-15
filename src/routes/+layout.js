import { apiPlugin, storyblokInit, useStoryblokApi } from "@storyblok/svelte";
 
/** @type {import('./$types').LayoutLoad} */
export async function load() {
  storyblokInit({
    accessToken: "xxxxxx",
    use: [apiPlugin]
  });
  let storyblokApi = await useStoryblokApi();
 
  return {
    storyblokApi: storyblokApi,
  };
}