import React from "react";
import { AnimatePresence } from "framer-motion";

export const wrapPageElement = ({ element }) => (
  <AnimatePresence>{element}</AnimatePresence>
);
