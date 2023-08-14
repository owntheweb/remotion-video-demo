'use strict';
import React from 'react';
import {AbsoluteFill} from 'remotion';
import {LessonThumbnail} from './LessonThumbnail';

type Lesson = {
	id: string;
	imagePath: string;
	fromFrame?: number;
	description: string;
	bulletPoints: string[];
};

const lessons: Lesson[] = [
	{
		id: '96a34173-17a3-4782-8592-5e43ebc6edef',
		imagePath: 'images/teachers/teacher-0.jpg',
		fromFrame: 10,
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed dapibus neque, eget lacinia odio. Vivamus lacinia nunc non interdum pellentesque.',
		bulletPoints: [
			'Lorem ipsum dolor sit amet.',
			'Consectetur adipiscing elit.',
			'Vivamus lacinia nunc non interdum.',
		],
	},
	{
		id: 'c740c30d-7616-416b-ab14-810a32304d3f',
		imagePath: 'images/teachers/teacher-1.jpg',
		fromFrame: 50,
		description:
			'Lorem ipsum dolor sit amet, consectetur elit. Morbi non arcu risus, quis porta mauris. Aenean at lacus viverra, placerat nulla vitae, vehicula magna.',
		bulletPoints: [
			'Lorem ipsum dolor amet.',
			'Morbi non arcu risus.',
			'Aenean at lacus viverra.',
			'Proin eu urna quis mauris.',
		],
	},
	{
		id: 'cf259e2a-2563-456f-a1c1-1e471dd8575b',
		imagePath: 'images/teachers/teacher-2.jpg',
		fromFrame: 90,
		description:
			'Lorem ipsum dolor sit, adipiscing elit. Nunc sed velit dignissim, lacinia ante vitae, vestibulum elit. Donec vitae efficitur nibh, et pharetra sapien.',
		bulletPoints: [
			'Lorem ipsum dolor sit.',
			'Nunc sed velit dignissim.',
			'Donec vitae efficitur nibh.',
			'Aenean at lacus viverra.',
		],
	},
	{
		id: 'e495004e-5a4f-4dcf-8cdf-6046a1dd2a06',
		imagePath: 'images/teachers/teacher-3.jpg',
		fromFrame: 130,
		description:
			'Lorem ipsum dolor, consectetur adipiscing. Curabitur rhoncus tincidunt sem, eget vehicula lacus. Proin eu urna quis mauris lacinia molestie.',
		bulletPoints: [
			'Lorem ipsum dolor consectetur.',
			'Curabitur rhoncus tincidunt.',
			'Proin eu urna quis mauris.',
		],
	},
];

export const Training: React.FC = () => {
	return (
		<AbsoluteFill className="bg-slate-900 text-white text-7xl p-24">
			<div className="grid gap-16 grid-cols-2 grid-rows-2 h-full">
				{lessons.map((lesson) => (
					<LessonThumbnail
						key={lesson.id}
						imagePath={lesson.imagePath}
						fromFrame={lesson.fromFrame}
					>
						<>
							<p>{lesson.description}</p>
							<ul className="list-disc ml-4 pl-4 mt-2">
								{lesson.bulletPoints.map((point, pointIdx) => (
									<li key={pointIdx}>{point}</li>
								))}
							</ul>
						</>
					</LessonThumbnail>
				))}
			</div>
		</AbsoluteFill>
	);
};
