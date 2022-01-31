import classNames from "classnames";

export function getValidClassNames(pathname: string, href: string): string {
  const validClassNames = ["Menu-itemContent"];

  if (pathname === href) {
    validClassNames.push("Menu-itemContent--active");
  }

  return classNames(validClassNames);
}
