import React from 'react';
import { useRecoilState } from 'recoil';
import { settingsAtom } from '../atoms';
import Card from './card';


export default function Footer() {
  const [settings, changeSettings] = useRecoilState(settingsAtom);

  const handleSettingsChange = (e) => {
    console.log(e.target.name, e.target.value, e.target.checked)
    let value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
    if (e.target.type === 'number') {
      value = 2 * Math.round(value / 2);
    }
    changeSettings({
      ...settings,
      [e.target.name]: value
    })
  }
  return (
    <footer id="Settings" className="container mx-auto">
      <h1>Footer</h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-3">
        <div className="flex flex-col col-span-1">
          <label>Primary Color</label>
          <select name="primaryColor" value={settings.primaryColor} onChange={handleSettingsChange}>
            <option value="gray">Gray</option>
            <option value="red">Red</option>
            <option value="yellow">Yellow</option>
            <option value="green">Green</option>
            <option value="blue">Blue</option>
            <option value="indigo">Indigo</option>
            <option value="purple">Purple</option>
            <option value="pink">Pink</option>
          </select>
          <input type="number" name="smSpace" value={settings.smSpace} onChange={handleSettingsChange}/>
          <input type="number" name="mdSpace" value={settings.mdSpace} onChange={handleSettingsChange}/>
          <input type="number" name="lgSpace" value={settings.lgSpace} onChange={handleSettingsChange}/>
        </div>
      </div>
    </footer>
  )
}