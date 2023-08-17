import {useCurrentFrame} from 'remotion';

const TailwindCssVisual: React.FC = () => {
	const frame = useCurrentFrame();

	const textWhite = frame > 30 ? 'text-white' : '';
	const hFull = frame > 60 ? 'h-full' : '';
	const bgSlate = frame > 90 ? 'bg-slate-900' : '';
	const textSize = frame > 120 ? 'text-2xl' : '';
	const padding = frame > 150 ? 'p-4' : '';
	const flex = frame > 180 ? 'flex' : '';
	const flexCol = frame > 210 ? 'flex-col' : '';

	const flex2 = frame > 240 ? 'flex' : '';
	const flexCol2 = frame > 270 ? 'flex-col' : '';
	const flexGap = frame > 300 ? 'gap-4' : '';
	const hFull2 = frame > 330 ? 'h-full' : '';

	// Note: The visual representation of TailwindCSS for the demo and what it looks like here is a bit different.
	// Example: A div needed to be created to show what styling was being used in the parent container.
	// Check out the TailwindCSS docs for documentation at: https://tailwindcss.com
	return (
		<div className="w-full h-full bg-[#23435c] p-2">
			<div
				className={`${textWhite} ${hFull} ${bgSlate} ${textSize} ${padding} ${flex} ${flexCol}`}
			>
				<div className="shrink-1 mb-4">
					{`${textWhite} ${hFull} ${bgSlate} ${textSize} ${padding} ${flex} ${flexCol}`}
				</div>
				{flex2 && (
					<>
						<div className="shrink-1 mb-4">
							{`${flex2} ${flexCol2} ${flexGap} ${hFull2}`}
						</div>
						<div className={`${flex2} ${flexCol2} ${flexGap} ${hFull2}`}>
							<div className="grow bg-[#23435c] rounded-lg flex items-center justify-center">
								1
							</div>
							<div className="grow bg-[#23435c] rounded-lg flex items-center justify-center">
								2
							</div>
							<div className="grow bg-[#23435c] rounded-lg flex items-center justify-center">
								3
							</div>
						</div>
					</>
				)}
			</div>
		</div>
	);
};

export default TailwindCssVisual;
