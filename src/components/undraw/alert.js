import React from 'react';
import { useRecoilValue } from 'recoil';
import { settingsAtom } from '../../atoms';
// {primaryColor}
export default function Alert() {
  let { primaryColor } = useRecoilValue(settingsAtom);
  const primaryFill = primaryColor;
  if (primaryColor === 'yellow') {
    primaryColor = '#fbce33';
  }

  return (
    <svg id="e036d8c3-b5bc-4d4e-ad12-45724d0dcfd5" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 930.67538 521.87593"><path id="a08a2523-9d19-4e0c-87cb-6ce1a7fd2fc4" data-name="Path 133" d="M213.37258,618.97624a158.39338,158.39338,0,0,0,28.72768,33.86154c.254.23174.515.45361.77586.68127l23.73866-14.10511c-.1756-.23879-.36947-.50634-.57728-.79926-12.39459-17.25583-68.37231-132.05609-68.71437-157.47835C197.28,483.24064,177.17769,562.25219,213.37258,618.97624Z" transform="translate(-134.66231 -189.06204)" fill="#e6e6e6"/><path id="a62b1d0a-4504-46a8-81c8-bbc6043ad63f" data-name="Path 134" d="M237.51988,655.55937c.36662.16483.741.3251,1.118.478l17.80937-10.582c-.278-.16053-.60252-.3504-.97444-.56327-6.09666-3.56147-24.23716-14.2625-42.09847-25.91685-19.19136-12.52636-38.071-26.1452-41.34715-33.18782C172.70895,587.40853,193.83961,636.659,237.51988,655.55937Z" transform="translate(-134.66231 -189.06204)" fill="#e6e6e6"/><path id="fd401fbc-93ba-42a5-a9a4-5a6900171ed6" data-name="Path 133" d="M989.86254,665.2559a158.39406,158.39406,0,0,1-7.4,43.785c-.1.329-.211.653-.319.982h-27.613c.029-.295.059-.624.088-.982,1.841-21.166-8.677-148.453-21.369-170.483C934.36152,540.3449,992.00352,598.00187,989.86254,665.2559Z" transform="translate(-134.66231 -189.06204)" fill="#e6e6e6"/><path id="eaa08601-a63b-4214-86e2-4a8f8e2c7e12" data-name="Path 134" d="M987.79049,709.04088c-.231.329-.471.658-.717.982h-20.716c.157-.28.339-.609.55-.982,3.422-6.176,13.551-24.642,22.953-43.785,10.1-20.572,19.374-41.924,18.593-49.652C1008.69548,617.34587,1015.68746,670.4799,987.79049,709.04088Z" transform="translate(-134.66231 -189.06204)" fill="#e6e6e6"/><path d="M582.73018,709.255H263.402a28.57994,28.57994,0,0,1-28.54766-28.54766V217.6097A28.57994,28.57994,0,0,1,263.402,189.062H582.73018a28.57994,28.57994,0,0,1,28.54766,28.54766V680.70738A28.57994,28.57994,0,0,1,582.73018,709.255Z" transform="translate(-134.66231 -189.06204)" fill="#cacaca"/><path d="M583.29225,691.041H262.83992a8.8102,8.8102,0,0,1-8.80013-8.80013V216.07621a8.8102,8.8102,0,0,1,8.80013-8.80013H583.29225a8.81019,8.81019,0,0,1,8.80013,8.80013V682.24087A8.81019,8.81019,0,0,1,583.29225,691.041Z" transform="translate(-134.66231 -189.06204)" fill="#fff"/><circle cx="287.18951" cy="8.74274" r="2.42854" fill="#fff"/><path d="M1064.147,710.938H135.853a1.19068,1.19068,0,1,1,0-2.38136h928.294a1.19068,1.19068,0,1,1,0,2.38136Z" transform="translate(-134.66231 -189.06204)" fill="#cacaca"/><circle cx="288.40115" cy="355.3465" r="31" fill="#e4e4e4"/><path d="M442.47166,484.90854H403.65538L380.22154,370.27817a43.05942,43.05942,0,1,1,85.69153-.05078Z" transform="translate(-134.66231 -189.06204)" fill="#e4e4e4"/><path d="M575.5801,330.82838H717.454a30.15959,30.15959,0,0,1,29.42119,23.52657l71.68609,317.96779a24.3755,24.3755,0,0,1-22.57916,29.70689L650.1348,709.21552a32.20254,32.20254,0,0,1-33.27305-26.43158L576.197,457.97716l-7.692-42.52344-11.35095-62.75164a18.56906,18.56906,0,0,1,18.426-21.8737Z" transform="translate(-134.66231 -189.06204)" fill="#3f3d56"/><path d="M698.77657,337.68294h16.561a20.84257,20.84257,0,0,1,20.36353,16.39964l68.80881,315.37356a12.91479,12.91479,0,0,1-11.77337,15.64015l-145.37556,9.52782A16.72593,16.72593,0,0,1,629.80607,680.899l-58.715-325.96934a14.64977,14.64977,0,0,1,14.41777-17.24675h15.71067a6.91389,6.91389,0,0,1,6.67617,5.11645h0a6.10376,6.10376,0,0,0,5.89388,4.51694h74.58408a10.43362,10.43362,0,0,0,10.40289-9.6334Z" transform="translate(-134.66231 -189.06204)" fill="#fff"/><path d="M772.14887,438.77577a10.52534,10.52534,0,0,1,1.31643,1.00712l48.05635-12.25059L824.8,415.93891l18.14315,2.66086L839.134,439.6876a8,8,0,0,1-7.03474,6.53394L775.988,452.13061a10.49709,10.49709,0,1,1-3.83908-13.35484Z" transform="translate(-134.66231 -189.06204)" fill="#ffb6b6"/><circle cx="603.19202" cy="262.1948" r="31" fill={primaryColor} /><path d="M757.26253,391.75684H718.44625L695.01241,277.12647a43.05942,43.05942,0,1,1,85.69153-.05078Z" transform="translate(-134.66231 -189.06204)" fill={primaryColor}/><polygon points="711.524 240.061 699.144 250.741 681.824 265.671 674.174 226.531 673.374 222.461 672.744 219.231 690.294 188.661 704.924 189.501 705.924 189.561 705.944 189.781 706.174 191.831 709.174 218.811 709.244 219.461 711.524 240.061" fill="#3f3d56"/><polygon points="630.606 507.736 618.346 507.735 612.513 460.447 630.608 460.448 630.606 507.736" fill="#ffb6b6"/><path d="M768.39448,708.6817l-39.53076-.00146v-.5A15.38731,15.38731,0,0,1,744.2502,692.794h.001l24.144.001Z" transform="translate(-134.66231 -189.06204)" fill="#2f2e41"/><polygon points="758.606 508.736 746.346 508.735 740.513 461.447 758.608 461.448 758.606 508.736" fill="#ffb6b6"/><path d="M896.39448,709.6817l-39.53076-.00146v-.5A15.38731,15.38731,0,0,1,872.2502,693.794h.001l24.144.001Z" transform="translate(-134.66231 -189.06204)" fill="#2f2e41"/><path d="M903.06648,676.9734l-33,5-48.00977-162.48-50.99023,163.48-37-5,48-190v-15l6.5-22.5-.68018-6.09-4.73-42.59-2.04981-18.47-.13285-1.19313a4.05551,4.05551,0,0,1,3.19291-4.41685h0l15.39991-3.24H824.7364l14.8501,4.09,1.02.28.46.13-.23,1.92-3.48,29.18-.18994,1.6-3.3601,28.13-.74,6.17c29,21,30,42,30,42Z" transform="translate(-134.66231 -189.06204)" fill="#2f2e41"/><circle cx="674.44747" cy="148.19876" r="24.56103" fill="#ffb6b6"/><rect x="786.56648" y="443.4734" width="49" height="7" transform="matrix(0.99156, -0.12967, 0.12967, 0.99156, -185.77459, -80.11503)" fill="#3f3d56"/><path d="M721.14887,448.77577a10.52534,10.52534,0,0,1,1.31643,1.00712l48.05635-12.25059L773.8,425.93891l18.14315,2.66086L788.134,449.6876a8,8,0,0,1-7.03474,6.53394L724.988,462.13061a10.49709,10.49709,0,1,1-3.83908-13.35484Z" transform="translate(-134.66231 -189.06204)" fill="#ffb6b6"/><path d="M795.06648,383.9734l-8.5-6.5c-2.29817-.87172-5.44731,1.605-6,4l-12,49,25,18,3.5-5.5Z" transform="translate(-134.66231 -189.06204)" fill="#3f3d56"/><g opacity="0.2"><path d="M843.8365,407.87336a67.67557,67.67557,0,0,1-6.48,2.2c-.69995.21-1.41992.41-2.12988.6a66.019,66.019,0,0,1-14.34033,2.32,45.1399,45.1399,0,0,1-6.25977-.17,35.24271,35.24271,0,0,1-6.58984-1.3c-.07031-.02-.15039-.04-.22021-.06a28.90621,28.90621,0,0,1-11.9502-6.79,23.55972,23.55972,0,0,1-2.10986-2.35,21.23879,21.23879,0,0,1-4.56006-16.53,14.15326,14.15326,0,0,1,.34033-1.57,25.10719,25.10719,0,0,1,1.48975-4.1c.27-.62.57031-1.23.89013-1.82995l11.29981-3.82h21.52l14.8501,4.09,1,.06.02.22.46.13-.23,1.92Z" transform="translate(-134.66231 -189.06204)"/></g><path d="M790.2894,316.92681c-4.59329-.563-9.634-.16485-13.21411,2.76738s-4.73558,9.02781-1.34592,12.17829c3.00083,2.7891,7.69329,2.13322,11.71262,2.92632a15.85418,15.85418,0,0,1,12.38363,15.15657c-.05982,10.17413-9.82411,17.87894-11.578,27.90093-1.197,6.83982,1.68772,14.03819,6.675,18.86966s11.84323,7.44255,18.7509,8.1498,13.8926-.373,20.60575-2.14766c6.74127-1.78215,13.3778-4.31055,19.03424-8.388s10.2931-9.82559,12.10928-16.55777.51227-14.45089-4.16774-19.61986c-5.35905-5.919-14.27436-7.95446-18.90989-14.45565-5.19639-7.28778-3.27352-17.66625-7.4792-25.56731-2.80792-5.27513-8.12457-8.87314-13.79191-10.76857s-11.719-2.26953-17.69212-2.4531c-3.13956-.09649-6.37527-.12863-9.30035,1.016s-5.49633,3.75316-5.648,6.89055S790.2894,316.92681,790.2894,316.92681Z" transform="translate(-134.66231 -189.06204)" fill="#2f2e41"/></svg>
  )
}