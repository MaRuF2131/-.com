export function getYoutubeId(url) {
  try {
    const parsedUrl = new URL(url);

    // youtu.be short link
    if (parsedUrl.hostname === "youtu.be") {
      return parsedUrl.pathname.slice(1);
    }

    // youtube.com watch link
    if (parsedUrl.searchParams.get("v")) {
      return parsedUrl.searchParams.get("v");
    }

    // youtube.com/embed/VIDEO_ID
    if (parsedUrl.pathname.includes("/embed/")) {
      return parsedUrl.pathname.split("/embed/")[1];
    }

    return null;
  } catch (error) {
    return null;
  }
}