# Remotion video with Tailwind

<p align="center">
  <a href="https://github.com/remotion-dev/logo">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://github.com/remotion-dev/logo/raw/main/animated-logo-banner-dark.gif">
      <img alt="Animated Remotion Logo" src="https://github.com/remotion-dev/logo/raw/main/animated-logo-banner-light.gif">
    </picture>
  </a>
</p>

This demo presents ideas on how to design and generate videos with the power of React combined with Remotion.

Watch the resulting video at:
[TODO: PENDING DEVELOPMENT TASKS HERE]

⭐️ Be sure to star this repository or post a like or comment on YouTube if interested in seeing more Remotion demos and tutorials like this. Pull requests to make this better are also very welcome. :D

## Special thanks

This video was made possible by [Remotion](https://remotion.dev).

Background music provided courtesy of [StreamBeats](https://www.senpai.tv/streambeats/)

Astronomy Picture of the Day courtesy of [NASA](https://api.nasa.gov/).

Weather data provided by [OpenWeather](https://home.openweathermap.org/).

[Looking at cell phone photo](https://github.com/owntheweb/remotion-video-demo/blob/main/public/images/jaikishan-patel-T9H8anqa458-unsplash-cropped.jpg) by [jaikishan patel](https://unsplash.com/@magictype) on [Unsplash](https://unsplash.com/photos/T9H8anqa458)

[Looking at laptop photo](https://github.com/owntheweb/remotion-video-demo/blob/main/public/images/bruce-mars-xj8qrWvuOEs-unsplash-cropped.jpg) by [bruce mars](https://unsplash.com/@brucemars) on [Unsplash](https://unsplash.com/photos/xj8qrWvuOEs)

"Tea time lady" generated with [DALL-E 2](https://openai.com/dall-e-2) and [HeyGen](https://www.heygen.com/affiliate-program).

## Setup

**Install Dependencies**

```console
npm i
```

**Connect To OpenWeather and NASA APIs**

Copy `template.env` to `.env` where Remotion will read API access keys for OpenWeather and NASA. [See here](https://www.remotion.dev/docs/env-variables) for more information on how Remotion handles environment variables.

```console
cp template.env .env
```

Obtain an OpenWeather access key for the weather demo by [signing up here](https://home.openweathermap.org/users/sign_up). The access key can be [found here](https://home.openweathermap.org/api_keys) after login to place in the `.env` file `REMOTION_OPENWEATHER_API_KEY` variable. Note: Once the email address is verified, it takes up to two hours for the key to become active. To customize the weather location, customize `<Weather ... />` in `src/Composition.tsx`.

Obtain the NASA access key for the Astronomy Picture of the Day demo by visiting the [NASA APIs](https://api.nasa.gov/) website and filling out the form. An email will be sent with a verification link. Clicking the link will give access to the API key that can be copied into the `.env` file's `REMOTION_NASA_API_KEY` variable.

**Background Music Setup**

The music used in this project isn't included as part of this repository, yet can be downloaded for free with open licensing to post on YouTube and elsewhere courtesy of [StreamBeats](https://www.senpai.tv/streambeats/).

Visit the [audio download page here](ttps://drive.google.com/drive/folders/1IoVhvfigg25IEaW-QNMGuG72U_pxcoI8). Download and copy `9. EZ PZ.wav` to `public/audio/external/`.

## StreamBeats Audio (thank you!)

Audio courtesy of [StreamBeats](https://www.senpai.tv/streambeats/), can be downloaded to this folder for personal, YouTube and streaming use:

- [9. EZ PZ.wav](https://drive.google.com/drive/folders/1IoVhvfigg25IEaW-QNMGuG72U_pxcoI8)
  - Download the song. Move to this folder and ensure name is still "9. EZ PZ.wav" (no name changes for simplicity).

## Other Notes

One issue experienced while developing on a Mac was an error when rendering Three.js animations. A work-around for this was to add this line to `remotion.config.js`:

```
Config.setChromiumOpenGlRenderer('angle');
```

More on this Chrome version issue can be [found here](https://oss.issuehunt.io/r/remotion-dev/remotion/issues/1761). If this addition is causing issues on non-Mac machines, try disabling the line in `remotion.config.js`.

## Run and Render

**Start Preview**

```console
npm start
```

**Render video**

```console
npm run build
```

**Upgrade Remotion**

```console
npm run upgrade
```

## Using server-side rendering

This template uses a [custom Webpack override](https://www.remotion.dev/docs/webpack). If you are using server-side rendering, you need to import the override function from `./src/webpack-override.ts` and pass it to [`bundle()`](https://www.remotion.dev/docs/bundle) (if using SSR) and [`deploySite()`](https://www.remotion.dev/docs/lambda/deploysite) (if using Lambda).

## Docs

Get started with Remotion by reading the [fundamentals page](https://www.remotion.dev/docs/the-fundamentals).

Get started with Tailwind by reading the ["Utility first" page](https://tailwindcss.com/docs/utility-first)

## Help

We provide help [on our Discord server](https://remotion.dev/discord).

## Issues

Found an issue with Remotion? [File an issue here](https://github.com/remotion-dev/remotion/issues/new).

## License

Note that for some entities a company license is needed. Read [the terms here](https://github.com/remotion-dev/remotion/blob/main/LICENSE.md).
