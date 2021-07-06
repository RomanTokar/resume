import React from "react";
import { Typography } from "@material-ui/core";
import { useAppContext } from "../contexts";
import { Section } from "./Section.component";

export const Profile = () => {
  const { profile } = useAppContext()

  return (
    <Section title={'Profile'}>
      <Typography variant={'body1'}>{profile}</Typography>
    </Section>
  )
}
