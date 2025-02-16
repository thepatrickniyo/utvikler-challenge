export default function RidersIcon({isActive}: {isActive?: boolean}) {
   return (
    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="16" viewBox="0 0 11 16" fill="none" data-locator-target=" vscode://file/${projectPath}${filePath}:${line}:${column}">
<path d="M7.63623 4.31625C8.41037 4.76294 9.0532 5.40565 9.50004 6.1797C9.94688 6.95376 10.182 7.83185 10.1816 8.72562V14.5437H7.14896C6.99871 14.9695 6.72007 15.3383 6.35145 15.5991C5.98283 15.8599 5.54238 16 5.09082 16C4.63925 16 4.1988 15.8599 3.83019 15.5991C3.46157 15.3383 3.18293 14.9695 3.03267 14.5437H3.39144e-07V8.72562C-0.000325925 7.83185 0.234759 6.95376 0.681599 6.1797C1.12844 5.40565 1.77127 4.76294 2.54541 4.31625C2.42591 4.10161 2.33426 3.87262 2.27269 3.6348H3.39144e-07V2.18028H2.27341C2.43518 1.55612 2.79964 1.00334 3.30957 0.608729C3.8195 0.214113 4.44603 0 5.09082 0C5.7356 0 6.36214 0.214113 6.87207 0.608729C7.382 1.00334 7.74645 1.55612 7.90822 2.18028H10.1816V3.6348H7.90822C7.8464 3.8748 7.75404 4.10389 7.63695 4.31625H7.63623ZM5.09082 9.45288C4.89794 9.45288 4.71296 9.5295 4.57657 9.66589C4.44018 9.80228 4.36356 9.98726 4.36356 10.1801V13.8164C4.36356 14.0093 4.44018 14.1943 4.57657 14.3307C4.71296 14.4671 4.89794 14.5437 5.09082 14.5437C5.2837 14.5437 5.46868 14.4671 5.60507 14.3307C5.74146 14.1943 5.81808 14.0093 5.81808 13.8164V10.1801C5.81808 9.98726 5.74146 9.80228 5.60507 9.66589C5.46868 9.5295 5.2837 9.45288 5.09082 9.45288ZM5.09082 4.36206C5.47658 4.36206 5.84654 4.20882 6.11932 3.93604C6.39209 3.66327 6.54534 3.29331 6.54534 2.90754C6.54534 2.52178 6.39209 2.15182 6.11932 1.87904C5.84654 1.60627 5.47658 1.45302 5.09082 1.45302C4.70506 1.45302 4.33509 1.60627 4.06232 1.87904C3.78954 2.15182 3.6363 2.52178 3.6363 2.90754C3.6363 3.29331 3.78954 3.66327 4.06232 3.93604C4.33509 4.20882 4.70506 4.36206 5.09082 4.36206Z" fill={isActive ? "#1F5AF4" : "#CDCCD6"}/>
</svg>
   ) 
}