

import * as $$Text from "../components/Text.bs.js";
import * as Util from "../common/Util.bs.js";
import * as Curry from "bs-platform/lib/es6/curry.js";
import * as React from "react";
import * as Belt_Array from "bs-platform/lib/es6/belt_Array.js";
import * as ColorTheme from "../common/ColorTheme.bs.js";
import * as Navigation from "../components/Navigation.bs.js";
import * as Caml_option from "bs-platform/lib/es6/caml_option.js";
import * as Router from "next/router";
import * as React$1 from "@mdx-js/react";
import * as Caml_chrome_debugger from "bs-platform/lib/es6/caml_chrome_debugger.js";

require('../styles/main.css')
;


let hljs = require('highlight.js/lib/highlight');
let reasonHighlightJs = require('reason-highlightjs');
hljs.registerLanguage('reason', reasonHighlightJs);

;

function SidebarLayout$ApiMd$Anchor(Props) {
  var id = Props.id;
  var style = {
    position: "absolute",
    top: "-7rem"
  };
  return React.createElement("span", {
              className: "relative"
            }, React.createElement("a", {
                  className: "mr-2 hover:cursor-pointer",
                  href: "#" + id
                }, Util.ReactStuff.s("#")), React.createElement("a", {
                  id: id,
                  style: style
                }));
}

var Anchor = {
  make: SidebarLayout$ApiMd$Anchor
};

function SidebarLayout$ApiMd$InvisibleAnchor(Props) {
  var id = Props.id;
  var style = {
    position: "absolute",
    top: "-1rem"
  };
  return React.createElement("span", {
              "aria-hidden": true,
              className: "relative"
            }, React.createElement("a", {
                  id: id,
                  style: style
                }));
}

var InvisibleAnchor = {
  make: SidebarLayout$ApiMd$InvisibleAnchor
};

function SidebarLayout$ApiMd$H2(Props) {
  var children = Props.children;
  return React.createElement(React.Fragment, undefined, React.createElement(SidebarLayout$ApiMd$InvisibleAnchor, {
                  id: children
                }), React.createElement("div", {
                  className: "border-b border-gray-200 my-20"
                }));
}

var H2 = {
  make: SidebarLayout$ApiMd$H2
};

function SidebarLayout$ApiMd$Pre(Props) {
  var children = Props.children;
  return React.createElement("pre", {
              className: "mt-2 mb-4 block"
            }, children);
}

var Pre = {
  make: SidebarLayout$ApiMd$Pre
};

function SidebarLayout$ApiMd$P(Props) {
  var children = Props.children;
  return React.createElement("p", {
              className: "mt-3 leading-4 text-night"
            }, children);
}

var P = {
  make: SidebarLayout$ApiMd$P
};

var components = {
  p: SidebarLayout$ApiMd$P,
  li: $$Text.Md.Li.make,
  h1: $$Text.H1.make,
  h2: SidebarLayout$ApiMd$H2,
  h3: $$Text.H3.make,
  h4: $$Text.H4.make,
  h5: $$Text.H5.make,
  ul: $$Text.Md.Ul.make,
  ol: $$Text.Md.Ol.make,
  inlineCode: $$Text.Md.InlineCode.make,
  code: $$Text.Md.Code.make,
  pre: SidebarLayout$ApiMd$Pre,
  a: $$Text.Md.A.make
};

var ApiMd = {
  Anchor: Anchor,
  InvisibleAnchor: InvisibleAnchor,
  H2: H2,
  Pre: Pre,
  P: P,
  components: components
};

function SidebarLayout$Sidebar$NavItem(Props) {
  var match = Props.isItemActive;
  var isItemActive = match !== undefined ? match : (function (_nav) {
        return false;
      });
  var match$1 = Props.isHidden;
  var isHidden = match$1 !== undefined ? match$1 : false;
  var items = Props.items;
  return React.createElement("ul", {
              className: "ml-2 mt-1 text-night"
            }, Util.ReactStuff.ate(Belt_Array.map(items, (function (m) {
                        var hidden = isHidden ? "hidden" : "block";
                        var match = Curry._1(isItemActive, m);
                        var active = match ? " bg-t-primary-lighten text-t-primary rounded -ml-1 px-2 font-bold block " : "";
                        return React.createElement("li", {
                                    key: m[/* name */0],
                                    className: hidden + " leading-5 w-4/5",
                                    tabIndex: 0
                                  }, React.createElement("a", {
                                        className: "hover:text-t-primary" + active,
                                        href: m[/* href */1]
                                      }, Util.ReactStuff.s(m[/* name */0])));
                      }))));
}

var NavItem = {
  make: SidebarLayout$Sidebar$NavItem
};

function SidebarLayout$Sidebar$Category(Props) {
  var isItemActive = Props.isItemActive;
  var category = Props.category;
  var tmp = {
    items: category[/* items */1]
  };
  if (isItemActive !== undefined) {
    tmp.isItemActive = Caml_option.valFromOption(isItemActive);
  }
  return React.createElement("div", {
              key: category[/* name */0],
              className: "my-12"
            }, React.createElement($$Text.Overline.make, {
                  children: Util.ReactStuff.s(category[/* name */0])
                }), React.createElement(SidebarLayout$Sidebar$NavItem, tmp));
}

var Category = {
  make: SidebarLayout$Sidebar$Category
};

function SidebarLayout$Sidebar$CollapsibleSection(Props) {
  var isItemActive = Props.isItemActive;
  var headers = Props.headers;
  var moduleName = Props.moduleName;
  var match = React.useState((function () {
          return false;
        }));
  var setCollapsed = match[1];
  var collapsed = match[0];
  var items = Belt_Array.map(headers, (function (header) {
          return /* record */Caml_chrome_debugger.record([
                    "name",
                    "href"
                  ], [
                    header,
                    "#" + header
                  ]);
        }));
  var tmp = {
    isHidden: collapsed,
    items: items
  };
  if (isItemActive !== undefined) {
    tmp.isItemActive = Caml_option.valFromOption(isItemActive);
  }
  return React.createElement("div", {
              className: "my-12"
            }, React.createElement($$Text.Overline.make, {
                  children: React.createElement("a", {
                        className: "cursor-pointer hover:text-berry",
                        href: "#",
                        onClick: (function (evt) {
                            evt.preventDefault();
                            return Curry._1(setCollapsed, (function (isCollapsed) {
                                          return !isCollapsed;
                                        }));
                          })
                      }, React.createElement("span", {
                            className: "hidden hover:block"
                          }, Util.ReactStuff.s(collapsed ? "v" : "^")), Util.ReactStuff.s(moduleName))
                }), React.createElement(SidebarLayout$Sidebar$NavItem, tmp));
}

var CollapsibleSection = {
  make: SidebarLayout$Sidebar$CollapsibleSection
};

function SidebarLayout$Sidebar(Props) {
  var categories = Props.categories;
  var route = Props.route;
  var match = Props.children;
  var children = match !== undefined ? Caml_option.valFromOption(match) : null;
  var isItemActive = function (navItem) {
    return navItem[/* href */1] === route;
  };
  return React.createElement("div", {
              className: "pl-2 flex w-full justify-center h-auto overflow-y-visible block bg-light-grey",
              style: {
                maxWidth: "17.5rem"
              }
            }, React.createElement("nav", {
                  className: "relative w-48 sticky h-screen block overflow-y-auto scrolling-touch pb-32",
                  style: {
                    top: "4rem"
                  }
                }, children, React.createElement("div", undefined, Util.ReactStuff.ate(Belt_Array.map(categories, (function (category) {
                                return React.createElement("div", {
                                            key: category[/* name */0]
                                          }, React.createElement(SidebarLayout$Sidebar$Category, {
                                                isItemActive: isItemActive,
                                                category: category
                                              }));
                              }))))));
}

var Sidebar = {
  NavItem: NavItem,
  Category: Category,
  CollapsibleSection: CollapsibleSection,
  make: SidebarLayout$Sidebar
};

function SidebarLayout$Docs(Props) {
  var match = Props.theme;
  var theme = match !== undefined ? match : /* Reason */825328612;
  var match$1 = Props.components;
  var components$1 = match$1 !== undefined ? Caml_option.valFromOption(match$1) : components;
  var children = Props.children;
  var router = Router.useRouter();
  var categories = /* array */[
    /* record */Caml_chrome_debugger.record([
        "name",
        "items"
      ], [
        "Introduction",
        [/* record */Caml_chrome_debugger.record([
              "name",
              "href"
            ], [
              "Overview",
              "/api"
            ])]
      ]),
    /* record */Caml_chrome_debugger.record([
        "name",
        "items"
      ], [
        "JavaScript",
        [
          /* record */Caml_chrome_debugger.record([
              "name",
              "href"
            ], [
              "Js Module",
              "/js_docs"
            ]),
          /* record */Caml_chrome_debugger.record([
              "name",
              "href"
            ], [
              "Belt Stdlib",
              "/belt_docs"
            ])
        ]
      ])
  ];
  var theme$1 = ColorTheme.toCN(theme);
  var minWidth = {
    minWidth: "20rem"
  };
  return React.createElement("div", undefined, React.createElement("div", {
                  className: "text-night max-w-4xl w-full " + theme$1,
                  style: minWidth
                }, React.createElement(Navigation.ApiDocs.make, {
                      route: router.route
                    }), React.createElement("div", {
                      className: "flex mt-12"
                    }, React.createElement(SidebarLayout$Sidebar, {
                          categories: categories,
                          route: router.route
                        }), React.createElement("main", {
                          className: "pt-12 w-4/5 static min-h-screen overflow-visible"
                        }, React.createElement(React$1.MDXProvider, {
                              components: components$1,
                              children: React.createElement("div", {
                                    className: "pl-8 max-w-md mb-32 text-lg"
                                  }, children)
                            })))));
}

var Docs = {
  make: SidebarLayout$Docs
};

function SidebarLayout$Prose$Md$Anchor(Props) {
  var id = Props.id;
  var style = {
    position: "absolute",
    top: "-7rem"
  };
  return React.createElement("span", {
              style: {
                position: "relative"
              }
            }, React.createElement("a", {
                  className: "mr-2 hover:cursor-pointer",
                  href: "#" + id
                }, Util.ReactStuff.s("#")), React.createElement("a", {
                  id: id,
                  style: style
                }));
}

var Anchor$1 = {
  make: SidebarLayout$Prose$Md$Anchor
};

function SidebarLayout$Prose$Md$H2(Props) {
  var children = Props.children;
  return React.createElement(React.Fragment, undefined, React.createElement("h2", {
                  className: "mt-12 text-3xl leading-1 tracking-tight font-overpass font-medium font-black text-night-dark"
                }, React.createElement(SidebarLayout$Prose$Md$Anchor, {
                      id: children
                    }), children));
}

var H2$1 = {
  make: SidebarLayout$Prose$Md$H2
};

function SidebarLayout$Prose$Md$Pre(Props) {
  var children = Props.children;
  return React.createElement("pre", {
              className: "mt-2 mb-4 block"
            }, children);
}

var Pre$1 = {
  make: SidebarLayout$Prose$Md$Pre
};

function SidebarLayout$Prose$Md$P(Props) {
  var children = Props.children;
  return React.createElement("p", {
              className: "text-base mt-3 leading-4 text-night"
            }, children);
}

var P$1 = {
  make: SidebarLayout$Prose$Md$P
};

var components$1 = {
  p: SidebarLayout$Prose$Md$P,
  li: $$Text.Md.Li.make,
  h1: $$Text.H1.make,
  h2: SidebarLayout$Prose$Md$H2,
  h3: $$Text.H3.make,
  h4: $$Text.H4.make,
  h5: $$Text.H5.make,
  ul: $$Text.Md.Ul.make,
  ol: $$Text.Md.Ol.make,
  inlineCode: $$Text.Md.InlineCode.make,
  code: $$Text.Md.Code.make,
  pre: SidebarLayout$Prose$Md$Pre,
  a: $$Text.Md.A.make
};

var Md = {
  Anchor: Anchor$1,
  H2: H2$1,
  Pre: Pre$1,
  P: P$1,
  components: components$1
};

function SidebarLayout$Prose(Props) {
  var children = Props.children;
  return React.createElement(SidebarLayout$Docs, {
              components: components$1,
              children: children
            });
}

var Prose = {
  Md: Md,
  make: SidebarLayout$Prose
};

var Link = 0;

export {
  Link ,
  ApiMd ,
  Sidebar ,
  Docs ,
  Prose ,
  
}
/*  Not a pure module */
