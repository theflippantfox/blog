import type { ServerLoadEvent } from "@sveltejs/kit";

export const load = async ({ params }: ServerLoadEvent) => {
  return {
    slug: params.slug
  };
}
