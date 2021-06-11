import React from "react";
import sanitizeHtml from "sanitize-html";

export const Parse = ({ html }: { html: string }) => {
  const clean = sanitizeHtml(html, {
    allowedTags: sanitizeHtml.defaults.allowedTags.concat([
      "html",
      "body",
      "img",
      "?php",
    ]),
    allowedAttributes: {
      a: ["href", "name", "target"],
      // We don't currently allow img itself by default, but this
      // would make sense if we did. You could add srcset here,
      // and if you do the URL is checked for safety
      img: ["src"],
      "*": ["class"],
    },
  });
  console.log(clean);

  return (
    <span
      className="sanitized-html"
      dangerouslySetInnerHTML={{ __html: clean }}
    />
  );
};
export default Parse;
