import React from "react";
import { FeatureItem } from "./feature-item";

export const ComingSoonFeatures: FeatureItem[] = [
  {
    title: "A beautiful standard library",
    description: (
      <>
        NeoHaskell offers a clean and intuitive language design, complemented by
        a core library that provides all the tools you need to start creating
        amazing software right away.
      </>
    ),
    buttonText: "Start Coding",
    showcase: {
      language: "haskell",
      code: `"NeoHaskell is cool"
  |> Text.toWordList
  |> List.map Text.length
  |> List.map (\\x -> x * x)
  |> List.takeIf Int.isEven`,
    },
  },
  {
    title: "An integrated build system",
    description: (
      <>
        NeoHaskell's CLI tool installs all required utilities and makes
        multi-platform support a breeze. Whether you're compiling to native
        code, installing dependencies, or packaging your application for
        deployment, you'll enjoy a seamless experience.
      </>
    ),
    buttonText: "Enjoy the Ride",
    showcase: {
      language: "bash",
      code: `$ neo setup
Setting up NeoHaskell...
Downloading the latest version of the compiler...
Installing build process plugins...
Done!

$ neo build
Building...

$ neo add scotty
Adding 'scotty' to your project...
Installing dependencies...
Done!
    `,
    },
  },
  {
    title: "Mobile development",
    description: (
      <>
        Build mobile applications with NeoHaskell. The CLI tool lets you
        generate a client package with auto-update support, and the generation
        of UIs is a breeze with the included UI library.
      </>
    ),
    buttonText: "Conquer Mobile apps",
    showcase: {
      language: "haskell",
      code: `screen = do
  body [] do
    image [source "/img.png"]
    text [] "Hello World!"`,
    },
  },
  {
    title: "Python interop",
    description: (
      <>
        <p>
          With the rise of the AI era, it is now more important than ever to be
          able to leverage the power of Python's AI ecosystem. NeoHaskell, with
          its Python interoperability, lets you do just that.
        </p>
        <br />
        <p>
          Use LangChain, Stable Diffusion, PyTorch, and other Python libraries
          right from your NeoHaskell code.
        </p>
      </>
    ),
    buttonText: "Engage Galaxy Brain",
    showcase: {
      language: "python",
      code: `answer question = [python|
  from langchain.llms import OpenAI
  llm = OpenAI()
  return llm.predict("hi!")
  |]`,
    },
  },
];
