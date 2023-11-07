//@ts-nocheck
import maui01 from "./assets/imgs/about/maui-01.jpg";
import maui02 from "./assets/imgs/about/maui-02.jpg";
import maui03 from "./assets/imgs/about/maui-03.jpg";
import maui04 from "./assets/imgs/about/maui-04.jpg";
import maui05 from "./assets/imgs/about/maui-05.jpg";
import maui06 from "./assets/imgs/about/maui-06.jpg";
import maui07 from "./assets/imgs/about/maui-07.jpg";
import minuteLongVideo from "./assets/clips/minute-long-video.mp4";
import clipFilters from "./assets/clips/replay-viewer/filters.mp4";
import clipFiltersThumbnail from "./assets/clips/replay-viewer/thumbnails/filters-thumbnail.png";
import clipNavigation from "./assets/clips/replay-viewer/navigation.mp4";
import clipNavigationThumbnail from "./assets/clips/replay-viewer/thumbnails/navigation-thumbnail.png";
import clipDealPlayer from "./assets/clips/replay-viewer/deal-player.mp4";
import clipDealPlayerThumbnail from "./assets/clips/replay-viewer/thumbnails/deal-player-thumbnail.png";
import minuteLongVideoThumbnail from "./assets/clips/replay-viewer/thumbnails/minute-long-video-thumbnail.png";
import clipBridgeResizing from "./assets/clips/bridge/resizing.mp4";
import clipBridgeResizingThumbnail from "./assets/clips/bridge/thumbnails/resizing.png";
import clipBridgeDealSummary from "./assets/clips/bridge/dealSummary.mp4";
import clipBridgeDealSummaryThumbnail from "./assets/clips/bridge/thumbnails/deal-summary.png";
import clipBridgeAnimationRoundEnd from "./assets/clips/bridge/animation-roundEnd.mp4";
import clipBridgeAnimationRoundEndThumbnail from "./assets/clips/bridge/thumbnails/animation-round-end.png";
import clipBridgeSaveGame from "./assets/clips/bridge/saveGame.mp4";
import clipBridgeSaveGameThumbnail from "./assets/clips/bridge/thumbnails/save-game.png";
import clipHighRes from "./assets/clips/high-res.mp4";
import clipLowRes from "./assets/clips/low-res.mp4";

import maui01Thumbnail from "./assets/imgs/about/thumbnails/maui-01-thumbnail.jpg";
import maui04Thumbnail from "./assets/imgs/about/thumbnails/maui-04-thumbnail.jpg";
import maui05Thumbnail from "./assets/imgs/about/thumbnails/maui-05-thumbnail.jpg";
import maui06Thumbnail from "./assets/imgs/about/thumbnails/maui-06-thumbnail.jpg";
import maui07Thumbnail from "./assets/imgs/about/thumbnails/maui-07-thumbnail.jpg";
import React from "react";
import { CarouselItemProps } from "../components/CarouselItem";

export const items = [
	{
		description: "High-res video with Low-res Screenshot Preview",
		srcMain: {
			hiRes: clipHighRes,
			loRes: clipLowRes,
		},
		srcThumbnail: clipNavigationThumbnail,
		modal: {
			sections: [
				{
					title: "High Resolution Video",
					titleElementType: 'h2',
					text: "This video is 1080p, but the screenshot viewer that appears when hovering the progress bar is a 480p version of the video.  This improves the \"smoothness\" of the preview.",
				},
			]
		},
		video: {
			autoPlay: false,
			muted: true,
		}
	},
	{
		description: "Video Sub-sections using numbers",
		srcMain: clipNavigation,
		srcThumbnail: clipNavigationThumbnail,
		modal: {
			sections: [
				{
					title: "Using Strings To Specify Sections",
					titleElementType: 'h2',
					text: "One can use an integer representing the duration in milliseconds that the section should span.",
				},
				{
					text: "Example: ",
				},
				{
					codeSection: {
						lines: [
							`sections: [`,
							` // lasts 2 seconds, so from 0 seconds to 2 seconds.`,
							` ['Searching Users', 2000],`,
							` // lasts 5 seconds, so from 2 seconds to 7 seconds.`,
							` ['Filtering Results', 5000],`,
							` // takes up the remaining space, so from from 7 seconds to videoEnd.`,
							` ['Hiding Filters'],`,
							`]`,
						],
						startTabCount: 1,
						tabSpacing: 15,
					}
				},
			]
		},
		video: {
			autoPlay: false,
			muted: true,
			sections: [
				['Loggin in', 5000],
				['Left Pane', 7000],
				['Right Pane'],
			]
		}
	},
	{
		description: "Video Sub-sections using strings",
		srcMain: clipNavigation,
		srcThumbnail: clipNavigationThumbnail,
		modal: {
			sections: [
				{
					title: "Using Strings To Specify Sections",
					titleElementType: 'h2',
					text: "One can use strings to create the video sections in the previous video that uses integers.  In this case, the second value is the <strong>start time</strong> rather than the <strong>duration</strong>.",
				},
				{
					text: "Example: ",
				},
				{
					codeSection: {
						lines: [
							`sections: [`,
							` // when using strings, the first seconds will automatically start a 0, so can be omitted.`,
							` ['Searching Users'],`,
							` // starts at second 2, so goes from 2 seconds to 7 seconds.`,
							` ['Filtering Results', "02:00"],`,
							` // starts at second 7 and is last item, so goes to the end of video.`,
							` ['Hiding Filters', '07:00'],`,
							`]`,
						],
						startTabCount: 1,
						tabSpacing: 15,
					}
				},
			]
		},
		video: {
			autoPlay: false,
			muted: true,
			sections: [
				['Loggin in', ],
				['Left Pane', "5:00"],
				['Right Pane', "7:00"],
			]
		}
	},
	{
		description: "Minute Long Video",
		srcMain: minuteLongVideo,
		srcThumbnail: minuteLongVideoThumbnail,
		modal: {
			sections: [
				{
					title: 'Longer Clip',
					text: 'This video is used to test sections with a video greater than 1 minute.'
				}
			]
		},
		video: {
			autoPlay: false,
			muted: true,
			sections: [
				['Section 1'],
				['Section 2', '1:00:01'],
			]
		}
	},
	{
		description: "Video - No Thumbnail Given",
		srcMain: minuteLongVideo,
		modal: {
			sections: [
				{
					title: 'No Thumbnail Given',
					text: 'This video illustrates how a video with no thumbnail is displayed.'
				}
			]
		},
		video: {
			autoPlay: false,
			muted: true,
			sections: [
				['Section 1'],
				['Section 2', '1:00:01'],
			]
		}
	},
	{
		description: "Custom Modal with auto play",
		srcMain: clipDealPlayer,
		srcThumbnail: clipDealPlayerThumbnail,
		modal: {
			closeButtonTop: 25,
			children: (
					<section>
						<h4 style={{
							color: 'white',
							fontSize: 18,
							padding: '0 30px 10px 0',
						}}>
							Using JSX to Create a Modal (Avoiding Conflicts with Button by Adding 30px Padding to the Right of Title Div)
						</h4>
						<div
							style={{
								fontFamily: "Open Sans, sans-serif",
							}}>
							You can use the <strong>modal.children</strong> field to pass in your own JSX for the modal.
						</div>
					</section>
			),
		},
		video: {
			autoPlay: true,
			muted: true,
		}
	},
	{
		srcMain: maui03,
		description: "Image - No Thumbnail Specified and Modal overflow",
		modal: {
			sections: [
				{
					title: "Overflow: Scroll",
					text: "Modals that exceed the max height will display a scroll bar."
				},
				{
					title: "Filler",
					text: "This is where the section text goes. This could get really long for some cases so need to be able to scroll it."
				},
				{
					title: "Filler",
					text: "This is where the section text goes. This could get really long for some cases so need to be able to scroll it."
				},
				{
					title: "Filler",
					text: "This is where the section text goes. This could get really long for some cases so need to be able to scroll it."
				},
				{
					title: "Filler",
					text: "This is where the section text goes. This could get really long for some cases so need to be able to scroll it."
				},
				{
					title: "Filler",
					text: "This is where the section text goes. This could get really long for some cases so need to be able to scroll it."
				},
				{
					title: "Filler",
					text: "This is where the section text goes. This could get really long for some cases so need to be able to scroll it."
				},
				{
					title: "Filler",
					text: "This is where the section text goes. This could get really long for some cases so need to be able to scroll it."
				},
				{
					title: "Filler",
					text: "This is where the section text goes. This could get really long for some cases so need to be able to scroll it."
				},
				{
					title: "Filler",
					text: "This is where the section text goes. This could get really long for some cases so need to be able to scroll it."
				},
				{
					title: "Filler",
					text: "This is where the section text goes. This could get really long for some cases so need to be able to scroll it."
				},
				{
					title: "Filler",
					text: "This is where the section text goes. This could get really long for some cases so need to be able to scroll it."
				},
				{
					title: "Filler",
					text: "This is where the section text goes. This could get really long for some cases so need to be able to scroll it."
				},
				{
					title: "Filler",
					text: "This is where the section text goes. This could get really long for some cases so need to be able to scroll it."
				},
				{
					title: "Filler",
					text: "This is where the section text goes. This could get really long for some cases so need to be able to scroll it."
				},
				{
					title: "Filler",
					text: "This is where the section text goes. This could get really long for some cases so need to be able to scroll it."
				},
				{
					title: "Filler",
					text: "This is where the section text goes. This could get really long for some cases so need to be able to scroll it."
				},
				{
					title: "Filler",
					text: "This is where the section text goes. This could get really long for some cases so need to be able to scroll it."
				},
				{
					title: "Filler",
					text: "This is where the section text goes. This could get really long for some cases so need to be able to scroll it."
				},
			],
		},
	},
	{
		description: "No Modal with auto play",
		srcMain: clipBridgeResizing,
		srcThumbnail: clipBridgeResizingThumbnail,
		video: {
			autoPlay: true,
			muted: true,
		}
	},
	{
		description: "Many Sections (No Modal) - Cover Object Fit",
		srcMain: clipFilters,
		srcThumbnail: clipFiltersThumbnail,
		video: {
			autoPlay: false,
			muted: true,
			sections: [
				['Login', '02:00'],
				['Finding Games where Contract is 1 club', '3:00'],
				['Opening First 1st Club Game', "13:00"],
				['Viewing 5th Deal of 1st Game', "16:00"],
				['Noticing Adam has 2 of Clubs in First Game', "19:00"],
				['Opening Second 1 Club Game', "22:500"],
				['Viewing 6th Deal of 2nd Game', "25:00"],
				['Noticing Ann has 2 of Clubs in Second Game', "29:00"],
				['Adding Filter for Ann Having 2 of Clubs', "32:00"],
				['Only One Game Remains', "39:500"],
				['Proving Remaining Game is the One Where Ann has 2 of Clubs', "43:00"],
			]
		},
		itemStyles: {
			objectFit: 'cover',
			objectPosition: 'top',
		}
	},
	{
		description: "Custom video fit and position",
		srcMain: clipBridgeDealSummary,
		srcThumbnail: clipBridgeDealSummaryThumbnail,
		modal: {
			sections: [
				{
					title: "Object Fit",
					text: "The object fit for this video is set to <strong>scale-down</strong>.  The difference is only really noticable in fullscreen though.  Try changing the viewport width when in fullscreen mode to see the difference clearly."
				},
			],
		},
		video: {
			autoPlay: false,
			muted: true,
		},
		itemStyles: {
			objectFit: 'scale-down',
			objectPosition: 'top',
		}
	},
	{
		description: "Custom Modal (no auto play)",
		srcMain: clipBridgeAnimationRoundEnd,
		srcThumbnail: clipBridgeAnimationRoundEndThumbnail,
		modal: {
			children: (
				<>
					<section>
						<h4 style={{
							color: 'white',
							fontSize: 18,
							padding: '0 30px 10px 0',
						}}>
							Using JSX to Create a Modal (No Auto Play on this Video)
						</h4>
						<div
							style={{
								fontFamily: "Open Sans, sans-serif",
							}}>
							This means that the video will not start immediately after you have clicked it.
						</div>
					</section>
				</>
			),
		},
		video: {
			autoPlay: false,
			muted: true,
		}
	},
	{
		description: "Image - Defaults and Thumbnail",
		srcMain: maui05,
		srcThumbnail: maui05Thumbnail,
	},
	{
		description: "Image - Fullscreen vs Non-Fullscreen Object Stylings",
		srcMain: maui02,
		modal: {
			sections: [
				{
					title: "Specifying Custom Styles for an Item Based on Viewing Mode",
					text: "This item illustrates how to specify custom styles for an item based on whether the current viewing mode is fullscreen or not.  Here is the object used:"
				},
				{
					text: "Example: ",
				},
				{
					codeSection: {
						lines: [
							`itemStyles: {`,
							` // these styles only apply when not in fullscreen mode`,
							` nonFullscreen: {`,
							`  objectFit: 'cover',`,
							`  objectPosition: 'top',`,
							` },`,
							` // these styles only apply when in fullscreen mode`,
							` fullscreen: {`,
							`  objectFit: 'scale-down',`,
							`  objectPosition: 'left',`,
							` }`,
							`}`,
						],
						startTabCount: 1,
						tabSpacing: 15,
					}
				}
			],
		},
		itemStyles: {
			nonFullscreen: {
				objectFit: 'cover',
				objectPosition: 'top',
			},
			fullscreen: {
				objectFit: 'contain',
				objectPosition: 'bottom',
			},
		}
	},
	{
		srcMain: maui01,
		srcThumbnail: maui01Thumbnail,
		description: "Image - Filler 1"
	},
	{
		srcMain: maui06,
		srcThumbnail: maui06Thumbnail,
		description: "Image - Filler 2",
	},
	{
		srcMain: maui07,
		srcThumbnail: maui07Thumbnail,
		description: "Image - Filler 2",
	},
	{
		description: "Video Filler",
		srcMain: clipBridgeSaveGame,
		srcThumbnail: clipBridgeSaveGameThumbnail,
		video: {
			autoPlay: true,
			muted: true,
		}
	},
	{
		srcMain: maui04,
		srcThumbnail: maui04Thumbnail,
		description: "Image - Filler 2",
	},
] as CarouselItemProps[];