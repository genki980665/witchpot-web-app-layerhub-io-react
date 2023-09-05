'use client'

import React from "react";
import { Context } from "../context";
import { Editor } from "@layerhub-io/core";

export function useEditor() : Editor {
  const { editor } = React.useContext(Context);
  return editor;
}
