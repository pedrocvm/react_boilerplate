import React from 'react';
import Home, { HomeTemplateProps } from 'templates/Home';

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />;
}

export function getServerSideProps() {
  return {
    props: {}
  };
}