import React from 'react'
import subway from '../images/subway.svg'

const Streaming = ({ defaultSize }) => {
    return (
        // <svg id="f6781722-f228-421a-a89e-cafb7a52e09a" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width={defaultSize ? "936.0675" : '100%'} height={defaultSize ? "831.84998" : '100%'} viewBox="0 0 936.0675 831.84998"><title>video streaming</title><circle cx="800.0675" cy="400.7537" r="136" fill="#3f3d56" /><path d="M305.95069,351.12442l73.50074,369.49239L732.44165,852.3187a374.93617,374.93617,0,0,0,16.50217-205.20263C708.35049,443.0511,510.01566,310.53109,305.95069,351.12442Z" transform="translate(-131.96625 -34.07501)" fill="#f2f2f2" /><path d="M274.97489,834.61071c11.54993,21.41985,36.063,30.61492,36.063,30.61492s5.78695-25.53335-5.763-46.95319-36.063-30.61492-36.063-30.61492S263.425,813.19087,274.97489,834.61071Z" transform="translate(-131.96625 -34.07501)" fill="#3f3d56" /><path d="M282.91359,827.56374C303.766,840.10921,311.79688,865.028,311.79688,865.028s-25.77747,4.57854-46.62985-7.96694-28.88328-37.46426-28.88328-37.46426S262.06122,815.01826,282.91359,827.56374Z" transform="translate(-131.96625 -34.07501)" fill="#3f51b5" /><path d="M303.98,865.925c32.67-85.93,37.39-197.12,30.53-318.79q-.15006-2.88-.33-5.78-1.545-26.31-3.76-53.21h71.31q-1.455,27.93-2.07,55.32c-.03,1.21-.05,2.41-.07995,3.6-2.28,116.92,8.19,225.56,42.29,318.86Z" transform="translate(-131.96625 -34.07501)" fill="#3f3d56" /><path d="M838.92307,865.24882q-33.42035-5.662-64.281-9.725l8.13328-15.76933c-2.74256-.95255-14.79194,8.07809-14.79194,8.07809L778.657,802.058C764.86368,803.72141,757.85062,850.46,757.85062,850.46l-15.41077-15.802,7.46085,17.76561c-62.968-7.41544-117.34916-10.165-163.09014-10.26406l6.9613-13.4969c-2.74256-.95255-14.79194,8.07809-14.79194,8.07809l10.67364-45.77459c-13.79337,1.66344-20.80642,48.40207-20.80642,48.40207l-15.41077-15.802,7.90222,18.81669a916.12266,916.12266,0,0,0-93.75366,6.36833c7.04105-21.02573,30.95992-41.02287,30.95992-41.02287-18.2667,5.43279-27.84858,14.53661-32.85538,23.024a368.67156,368.67156,0,0,1,21.30917-127.38076S449.242,785.53341,454.0597,840.68385l.57623,9.79313c-32.00911,4.58328-44.60185,15.35173-44.60185,15.35173Z" transform="translate(-131.96625 -34.07501)" fill="#3f3d56" /><path d="M598.0138,350.43657c-2.482,143.567-107.67227,191.88507-236.35028,189.66051q-4.48347-.07751-8.92223-.23618-8.94275-.31252-17.693-.973C219.02839,530.15287,129.70176,475.89741,132.01,342.38039,134.39871,204.20683,359.58875,46.68825,376,34.075,376.01414,34.07526,600.49556,206.88117,598.0138,350.43657Z" transform="translate(-131.96625 -34.07501)" fill="#3f51b5" /><circle cx="386.16326" cy="624.75264" r="28.63623" fill="#2f2e41" /><circle cx="355.14069" cy="587.04827" r="28.63623" fill="#2f2e41" /><path d="M462.40666,644.83592a28.63779,28.63779,0,0,0,44.22192-15.0364A28.63781,28.63781,0,1,1,450.767,618.056,28.62721,28.62721,0,0,0,462.40666,644.83592Z" transform="translate(-131.96625 -34.07501)" fill="#2f2e41" /><circle cx="393.56098" cy="635.96848" r="23.38625" fill="#ffb8b8" /><path d="M533.6408,689.1343s-9.54541,14.31811-8.1136,20.52263c0,0,6.20452,2.86362,6.20452,3.81816s5.72724,10.02268,5.72724,10.02268l6.68179,9.06814,2.86362,11.93176H533.16353l-15.27265-11.93176L503.0955,716.33872s-10.02268-4.77271-15.27266-.95455l-2.86362,2.38636s10.02268-13.36357,14.79538-16.2272c0,0,8.59087-10.5,7.63633-20.9999Z" transform="translate(-131.96625 -34.07501)" fill="#ffb8b8" /><path d="M529.82264,709.17966s9.54541,5.25,13.36357,15.27265,20.9999,43.43161,20.9999,43.43161,1.43181,21.47717.47727,22.43171-11.93176-9.54541-13.84084-12.409-9.54541-37.22709-9.54541-37.22709l-12.409-20.04536-2.38635-11.45449Z" transform="translate(-131.96625 -34.07501)" fill="#ffb8b8" /><path d="M559.89067,769.31573l4.29544-1.43181s26.24987-16.22719,27.68168-23.38625,22.43171-31.02258,22.909-18.13628-15.27265,27.20442-15.27265,27.20442-34.36347,48.20431-36.27255,34.36347Z" transform="translate(-131.96625 -34.07501)" fill="#ffb8b8" /><path d="M516.45907,736.38407s-.47727,13.36357-19.09082,18.13628c0,0-19.09082,25.7726-20.9999,37.22709s-52.02247,70.15875-52.02247,70.15875-46.29523,5.72724-46.29523,0,38.6589-10.5,38.6589-10.5,40.568-60.13607,42.47707-68.24967,20.04536-68.24967,28.63622-67.7724c0,0,8.1136-3.81816,12.8863-.95454S516.45907,736.38407,516.45907,736.38407Z" transform="translate(-131.96625 -34.07501)" fill="#ffb8b8" /><path d="M572.2997,790.31563s33.40893-44.86342,40.568-47.727,16.22719-4.77271,21.47717,1.90908S701.64,829.4518,701.64,829.4518s21.95444,22.43171,32.93166,18.13628c0,0,5.72725,4.7727-7.63632,5.72724a79.63144,79.63144,0,0,1-25.77261-2.86362s-8.11359,1.43181-13.84084,2.86362-12.8863,1.90908-12.409-1.90908l1.90908-15.27265s-49.15885-40.568-50.59066-57.74972c0,0,.95454-8.1136,0-7.15906s-20.9999,22.43171-30.068,27.20441-31.49984,11.45449-31.49984,11.45449Z" transform="translate(-131.96625 -34.07501)" fill="#ffb8b8" /><path d="M572.2997,790.31563s33.40893-44.86342,40.568-47.727,16.22719-4.77271,21.47717,1.90908S701.64,829.4518,701.64,829.4518s21.95444,22.43171,32.93166,18.13628c0,0,5.72725,4.7727-7.63632,5.72724a79.63144,79.63144,0,0,1-25.77261-2.86362s-8.11359,1.43181-13.84084,2.86362-12.8863,1.90908-12.409-1.90908l1.90908-15.27265s-49.15885-40.568-50.59066-57.74972c0,0,.95454-8.1136,0-7.15906s-20.9999,22.43171-30.068,27.20441-31.49984,11.45449-31.49984,11.45449Z" transform="translate(-131.96625 -34.07501)" opacity="0.1" /><path d="M567.04973,796.52014s43.90888-16.70446,49.63612-20.52262,26.24987-11.45449,36.74982-2.86363,61.56789,48.20431,78.74962,52.02248,46.7725,12.8863,46.7725,12.8863,19.09082,1.43181-1.43181,9.54541c0,0-25.29533,2.38635-29.59077,6.20451s-18.61354,8.59087-19.56808,2.38635-3.81817-14.31811-9.06814-15.27265S651.04932,822.77,641.50391,804.15647c0,0-21.47717,11.93176-34.84074,25.7726s-44.86341,21.47717-44.86341,21.47717Z" transform="translate(-131.96625 -34.07501)" fill="#ffb8b8" /><path d="M551.29981,781.24749s20.92123,5.561,22.631,3.49642,10.77791,9.38988,2.187,32.29886-6.68179,33.40893-11.45449,36.74982-27.20442-1.90908-33.8862.47727-15.27265,4.29544-18.13628-9.54541-10.02267-38.18163-8.59086-41.52252,9.06813-10.97722,9.06813-10.97722l15.74993-8.1136Z" transform="translate(-131.96625 -34.07501)" fill="#2f2e41" /><path d="M478.99334,727.55457s3.32267-9.30727,9.49074-11.05218a15.84558,15.84558,0,0,0,1.53976-.505c2.317-.91989,9.38474-2.928,14.50347,4.15946,6.20451,8.59087,11.93176,18.61354,7.159,24.34079s-14.31811,9.06814-14.31811,9.06814l-7.15906,9.06813s14.31812,25.77261,14.31812,37.70437c0,0,.47727,4.7727,8.59086-3.81817s41.31677-14.53042,41.31677-14.53042-6.9533-9.3331-1.70332-13.62853,10.0565-21.40483-2.36944-28.12278L529.10673,708.941l-3.81816.47727s5.01134,4.53407,5.48861,6.92043,19.56809,19.09081,11.93176,21.95443-20.04536-3.34089-25.29533-10.5c-2.88749-3.93748-6.93-9.3187-12.048-12.72921a17.84469,17.84469,0,0,0-17.84927-.95835l-1.60254.80126h0a20.44529,20.44529,0,0,0-7.06761,8.69566l-.56872,1.327Z" transform="translate(-131.96625 -34.07501)" fill="#2f2e41" /><circle cx="378.52694" cy="629.52533" r="20.9999" fill="#2f2e41" /><ellipse cx="396.18594" cy="621.65036" rx="18.61355" ry="14.55675" fill="#2f2e41" /><ellipse cx="389.26552" cy="644.55934" rx="3.10226" ry="5.48861" fill="#a0616a" /><path d="M515.9818,630.36322V668.373H526.959V630.36322a2.55828,2.55828,0,0,0-2.55811-2.55817h-5.861A2.55827,2.55827,0,0,0,515.9818,630.36322Z" transform="translate(-131.96625 -34.07501)" fill="#ff6584" /><circle cx="389.50416" cy="641.93436" r="11.93176" fill="#3f51b5" /><circle cx="389.50415" cy="641.93436" r="5.24998" fill="#f2f2f2" /><circle cx="389.50415" cy="641.93436" r="1.43181" fill="#ff6584" /><path d="M515.9818,630.36322v1.73727H526.959v-1.73727a2.55828,2.55828,0,0,0-2.55811-2.55817h-5.861A2.55827,2.55827,0,0,0,515.9818,630.36322Z" transform="translate(-131.96625 -34.07501)" opacity="0.1" /><path d="M643.48281,724.52213,615.38108,696.4204a5.24189,5.24189,0,0,0-7.41314,0l-25.27988,25.27988a5.24189,5.24189,0,0,0,0,7.41314l26.25648,26.25648a5.24188,5.24188,0,0,0,7.13347.26l27.12513-23.43463A5.24189,5.24189,0,0,0,643.48281,724.52213Z" transform="translate(-131.96625 -34.07501)" fill="#2f2e41" /><polygon points="503.572 694.911 478.992 670.332 458.708 690.616 482.333 714.241 503.572 694.911" fill="#f2f2f2" /><circle cx="480.66281" cy="692.04774" r="11.74606" fill="#3f51b5" /><path d="M617.85718,736.13412a11.74609,11.74609,0,0,0-11.96553-19.63205,11.74565,11.74565,0,1,1,10.65971,20.69257A11.82693,11.82693,0,0,0,617.85718,736.13412Z" transform="translate(-131.96625 -34.07501)" opacity="0.1" /><path d="M606.85413,723.78858c-1.40078,1.31619-1.47487,6.05414.66394,8.33041s5.6806,1.22891,7.08139-.08729.13011-2.40278-2.0087-4.67906S608.25492,722.47239,606.85413,723.78858Z" transform="translate(-131.96625 -34.07501)" fill="#f2f2f2" /><circle cx="486.81221" cy="692.23921" r="3.48031" fill="#2f2e41" /><circle cx="480.55636" cy="685.58131" r="3.48031" fill="#2f2e41" /><circle cx="486.8122" cy="692.2392" r="0.87008" fill="#f2f2f2" /><circle cx="487.1867" cy="690.09648" r="0.43504" fill="#f2f2f2" /><circle cx="480.93086" cy="683.43858" r="0.43504" fill="#f2f2f2" /><circle cx="480.55636" cy="685.58129" r="0.87008" fill="#f2f2f2" /><path d="M902.03375,381.96605V497.6749a2.97927,2.97927,0,0,0,4.46208,2.7459l91.72043-57.85443a3.278,3.278,0,0,0,0-5.45365l-91.72043-57.85443A2.95135,2.95135,0,0,0,902.03375,381.96605Z" transform="translate(-131.96625 -34.07501)" fill="#f2f2f2" /><path d="M399.66,543.465,398,526.075l-8.16-37.93-17.98-83.6,79.68-145.77-79.38,127.28.86-52.97,54.92-105.47-54.69,91.44,1.55-95.28,58.8-83.96-58.55,68.98.96-173.98v-.74l-.03.75-5.79,220.62-59.55-91.12,58.83,109.82-5.57,106.42-.17-2.82-68.92-96.31,68.71,106.29-.69,13.3-.13.21.06,1.09-17.64,85.82-10.94,53.21q.18,2.895.33,5.78c10.03.22,58.51-.14,65.07-.07Z" transform="translate(-131.96625 -34.07501)" fill="#3f3d56" /></svg>
        <img src={subway} width='100%' />
    )
}

export default Streaming