import { JSXElement } from "@mdx-js/mdx/lib/plugin/recma-jsx-rewrite"
import React, {ReactNode} from "react"

export const PageTitle = ({ title, children }: {title: string, children: ReactNode}) => {
  return (
    <h1>
      {title}
      <span>{children}</span>&nbsp;
    </h1>
  )
}

export default PageTitle
