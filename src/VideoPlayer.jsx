import {Media, Video } from '@vidstack/player-react';

export function VideoPlayer() {
  return (
    <Media>
  <Video autoplay loading="visible" poster="https://res.cloudinary.com/ds6avb9us/video/upload/v1681827165/9A6A6811-C229-4593-9061-4C380E70252A_ozwtxm.mov" controls preload="true">
    <video autoPlay  loading="visible" poster="https://res.cloudinary.com/ds6avb9us/video/upload/v1681827165/9A6A6811-C229-4593-9061-4C380E70252A_ozwtxm.movß" src="https://res.cloudinary.com/ds6avb9us/video/upload/v1681827165/9A6A6811-C229-4593-9061-4C380E70252A_ozwtxm.mov"  data-video="0" controls />
  </Video>
</Media>
  );
}