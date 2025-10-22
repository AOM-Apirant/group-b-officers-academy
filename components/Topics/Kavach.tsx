import React from 'react'

const Kavach = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-full shadow-lg mb-6">
            <h1 className="text-4xl font-bold tracking-wide">Kavach</h1>
          </div>
        </div>

        {/* Main Content Card */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* Railway Logo/Header */}
          <div className="bg-gradient-to-r from-red-600 to-red-700 px-8 py-6">
            <h2 className="text-2xl font-semibold text-white text-center">
              Indian Railway&apos;s
            </h2>
          </div>

          {/* Content Section */}
          <div className="p-8">
            <div className="text-center space-y-6">
              {/* ATP System */}
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border-l-4 border-blue-500">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Automatic Train Protection System
                </h3>
                <p className="text-lg text-blue-600 font-medium">
                  (IR-ATP)
                </p>
              </div>

              {/* Document Reference */}
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-mono text-gray-600">
                    CoE/Kavach/2024/008 Issue 2.0
                  </span>
                </div>
              </div>
            </div>

            {/* Reference Document Number */}
            <div className="flex justify-center mb-6">
              <span className="inline-block px-6 py-2 bg-blue-100 text-blue-800 text-sm rounded-full font-semibold tracking-wider shadow">
                3778523/2024/O/o ADRM/O/SC/SCR
              </span>
            </div>
            
            {/* Title */}
            <div className="text-center mb-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
                Training Module on Kavach System for Traffic Staff
              </h2>
            </div>

            {/* Table of Contents */}
            <div className="mx-auto max-w-2xl rounded-3xl shadow-2xl bg-gradient-to-br from-[#eef2ff] via-white to-[#f3f0ff] p-8 relative overflow-hidden">
              {/* Decorative BG gradients */}
              <div className="absolute -top-16 -left-16 w-44 h-44 bg-blue-300/20 rounded-full blur-2xl pointer-events-none"></div>
              <div className="absolute -bottom-16 -right-16 w-56 h-56 bg-indigo-300/20 rounded-full blur-2xl pointer-events-none"></div>
              
              <h3 className="text-3xl font-extrabold text-indigo-700 bg-white/75 rounded-lg shadow px-4 py-2 text-center mb-6 tracking-tight flex items-center justify-center gap-2 border-b-4 border-indigo-200">
                <span className="text-blue-400/70">📚</span>
                Table of Contents
              </h3>
              <nav>
                <ul className="divide-y divide-blue-100">
                  {/* Acronyms */}
                  <li className="flex items-center justify-between py-3 group hover:bg-blue-50 rounded-lg transition-colors duration-200 px-2">
                    <span className="flex items-center gap-1 text-blue-700 font-medium group-hover:text-indigo-600">
                      <span className="w-2 h-2 rounded-full bg-gradient-to-br from-blue-400 to-indigo-400 mr-2"></span>
                      Acronyms
                    </span>
                    <span className="text-gray-400 bg-blue-100 group-hover:bg-indigo-100 px-2 py-0.5 rounded-full text-xs font-bold">
                      4
                    </span>
                  </li>
                  {/* Course Content */}
                  <li className="flex items-center justify-between py-3 group hover:bg-blue-50 rounded-lg transition-colors duration-200 px-2">
                    <span className="flex items-center gap-1 text-blue-700 font-medium group-hover:text-indigo-600">
                      <span className="w-2 h-2 rounded-full bg-gradient-to-br from-purple-400 to-indigo-400 mr-2"></span>
                      Course Content
                    </span>
                    <span className="text-gray-400 bg-blue-100 group-hover:bg-indigo-100 px-2 py-0.5 rounded-full text-xs font-bold">
                      5
                    </span>
                  </li>
                  {/* 1. Introduction */}
                  <li className="flex items-center justify-between py-3 group hover:bg-purple-50 rounded-lg transition-colors duration-200 px-2 font-semibold text-gray-800">
                    <span className="flex items-center gap-2">
                      <span className="font-bold text-purple-500">1.</span> Introduction
                    </span>
                    <span className="text-gray-500 group-hover:text-purple-600 font-normal bg-white px-2 py-0.5 rounded-full text-xs">6</span>
                  </li>
                  {/* 2. Kavach and its Sub Systems */}
                  <li className="py-3 px-2">
                    <div className="flex items-center justify-between font-semibold text-gray-800 group hover:text-indigo-700 transition duration-200">
                      <span className="flex items-center gap-2">
                        <span className="font-bold text-purple-500">2.</span> Kavach and its Sub Systems
                      </span>
                      <span className="text-gray-500 font-normal bg-white px-2 py-0.5 rounded-full text-xs">7</span>
                    </div>
                    {/* Subsections */}
                    <ul className="mt-2 ml-6 space-y-1">
                      <li className="flex justify-between items-center text-gray-600 hover:text-blue-700 transition">
                        <span>2.1 Salient features of Kavach</span>
                        <span className="text-gray-400 text-xs bg-blue-50 px-2 py-0.5 rounded-full">7</span>
                      </li>
                      <li className="flex justify-between items-center text-gray-600 hover:text-blue-700 transition">
                        <span>2.2 Components of Kavach</span>
                        <span className="text-gray-400 text-xs bg-blue-50 px-2 py-0.5 rounded-full">8</span>
                      </li>
                      <li className="flex justify-between items-center text-gray-600 hover:text-blue-700 transition">
                        <span>2.3 Kavach arrangements in station at a glance</span>
                        <span className="text-gray-400 text-xs bg-blue-50 px-2 py-0.5 rounded-full">10</span>
                      </li>
                      <li className="flex justify-between items-center text-gray-600 hover:text-blue-700 transition">
                        <span>2.4 Loco Kavach at a glance</span>
                        <span className="text-gray-400 text-xs bg-blue-50 px-2 py-0.5 rounded-full">11</span>
                      </li>
                      <li className="flex justify-between items-center text-gray-600 hover:text-blue-700 transition">
                        <span>2.5 Radio Frequency Identification (RFID) Tags</span>
                        <span className="text-gray-400 text-xs bg-blue-50 px-2 py-0.5 rounded-full">11</span>
                      </li>
                      <li className="flex justify-between items-center text-gray-600 hover:text-blue-700 transition">
                        <span>2.6 Working Principle</span>
                        <span className="text-gray-400 text-xs bg-blue-50 px-2 py-0.5 rounded-full">12</span>
                      </li>
                    </ul>
                  </li>
                  {/* 3. Station Master Operation Cum Indication Panel (SM-OCIP) */}
                  <li className="py-3 px-2">
                    <div className="flex items-center justify-between font-semibold text-gray-800 group hover:text-indigo-700 transition duration-200">
                      <span className="flex items-center gap-2">
                        <span className="font-bold text-purple-500">3.</span> Station Master Operation Cum Indication Panel (SM-OCIP)
                      </span>
                      <span className="text-gray-500 font-normal bg-white px-2 py-0.5 rounded-full text-xs">13</span>
                    </div>
                    <ul className="mt-2 ml-6 space-y-1">
                      <li className="flex justify-between items-center text-gray-600 hover:text-blue-700 transition">
                        <span>3.1 Introduction to SM-OCIP</span>
                        <span className="text-gray-400 text-xs bg-indigo-50 px-2 py-0.5 rounded-full">13</span>
                      </li>
                      <li className="flex justify-between items-center text-gray-600 hover:text-blue-700 transition">
                        <span>3.2 Provisions in Station Master Operation Cum Indication Panel</span>
                        <span className="text-gray-400 text-xs bg-indigo-50 px-2 py-0.5 rounded-full">13</span>
                      </li>
                      <li className="flex justify-between items-center text-gray-600 hover:text-blue-700 transition">
                        <span>3.3 Manual SOS generation/ Cancellation</span>
                        <span className="text-gray-400 text-xs bg-indigo-50 px-2 py-0.5 rounded-full">15</span>
                      </li>
                      <li className="flex justify-between items-center text-gray-600 hover:text-blue-700 transition">
                        <span>3.4 SOS acknowledgement by SM</span>
                        <span className="text-gray-400 text-xs bg-indigo-50 px-2 py-0.5 rounded-full">15</span>
                      </li>
                      <li className="flex justify-between items-center text-gray-600 hover:text-blue-700 transition">
                        <span>3.5 Reporting of Kavach Failures</span>
                        <span className="text-gray-400 text-xs bg-indigo-50 px-2 py-0.5 rounded-full">16</span>
                      </li>
                      <li className="flex justify-between items-center text-gray-600 hover:text-blue-700 transition">
                        <span>3.6 Variations in SMOCIP in different makes</span>
                        <span className="text-gray-400 text-xs bg-indigo-50 px-2 py-0.5 rounded-full">16</span>
                      </li>
                    </ul>
                  </li>
                  {/* 4. Operational Modes of Onboard Kavach for Version 4.0 */}
                  <li className="py-3 px-2">
                    <div className="flex items-center justify-between font-semibold text-gray-800 group hover:text-indigo-700 transition duration-200">
                      <span className="flex items-center gap-2">
                        <span className="font-bold text-purple-500">4.</span> Operational Modes of Onboard Kavach for Version 4.0
                      </span>
                      <span className="text-gray-500 font-normal bg-white px-2 py-0.5 rounded-full text-xs">17</span>
                    </div>
                    <ul className="mt-2 ml-6 space-y-1">
                      <li className="flex justify-between items-center text-gray-600 hover:text-blue-700 transition">
                        <span>4.1 Driver Machine Interface (DMI) at a glance</span>
                        <span className="text-gray-400 text-xs bg-purple-50 px-2 py-0.5 rounded-full">17</span>
                      </li>
                      <li className="flex justify-between items-center text-gray-600 hover:text-blue-700 transition">
                        <span>4.2 Different Types of Operational Modes of Onboard Kavach for Version 4.0</span>
                        <span className="text-gray-400 text-xs bg-purple-50 px-2 py-0.5 rounded-full">17</span>
                      </li>
                      <li className="flex justify-between items-center text-gray-600 hover:text-blue-700 transition">
                        <span>4.3 Mode Transitions in Kavach Ver 4.0</span>
                        <span className="text-gray-400 text-xs bg-purple-50 px-2 py-0.5 rounded-full">23</span>
                      </li>
                      <li className="flex justify-between items-center text-gray-600 hover:text-blue-700 transition">
                        <span>4.4 Features available at different Operational Modes in Kavach</span>
                        <span className="text-gray-400 text-xs bg-purple-50 px-2 py-0.5 rounded-full">24</span>
                      </li>
                    </ul>
                  </li>
                  {/* 5. General Guidelines */}
                  <li className="flex items-center justify-between py-3 px-2 font-semibold text-gray-800 group hover:bg-indigo-50 rounded-lg transition-colors">
                    <span>
                      <span className="font-bold text-purple-500">5.</span> General Guidelines
                    </span>
                    <span className="text-gray-500 font-normal px-2 py-0.5 rounded-full text-xs bg-white">24</span>
                  </li>
                  {/* 6. FAQs */}
                  <li className="flex items-center justify-between py-3 px-2 font-semibold text-gray-800 group hover:bg-indigo-50 rounded-lg transition-colors">
                    <span>
                      <span className="font-bold text-purple-500">6.</span> Frequently Asked Questions <span className="font-light">(FAQs)</span>
                    </span>
                    <span className="text-gray-500 font-normal px-2 py-0.5 rounded-full text-xs bg-white">25</span>
                  </li>
                </ul>
              </nav>
            </div>
          </div>

          <div className="mt-12 mb-10 rounded-3xl shadow-2xl bg-gradient-to-br from-blue-100 via-white to-purple-100 border border-purple-200 overflow-hidden">
            <div className="px-8 py-6 flex flex-col md:flex-row items-center gap-6 md:gap-10 bg-gradient-to-r from-purple-50 via-blue-50 to-indigo-100 border-b border-purple-100">
              <div className="rounded-md shadow bg-indigo-600 text-white px-4 py-2 text-2xl font-black tracking-tight">3778523/2024/O/o ADRM/O/SC/SCR</div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-700 tracking-tight">Training Module on Kavach System <span className="font-light">for Traffic Staff</span></h2>
            </div>

            <div className="px-8 pt-12 pb-6 bg-gradient-to-br from-white/90 via-blue-50 to-purple-50 rounded-b-3xl relative overflow-visible">
              {/* Glowing floating background orbs for radiance */}
              <div className="absolute left-[-3rem] top-0 w-32 h-32 bg-purple-200 blur-3xl rounded-full opacity-50 animate-blob animation-delay-2000 -z-10"></div>
              <div className="absolute right-[-2rem] bottom-[-2rem] w-32 h-32 bg-indigo-100 blur-3xl rounded-full opacity-40 animate-blob animation-delay-4000 -z-10"></div>
              <div className="flex items-center gap-3 mb-6">
                <span className="flex items-center justify-center bg-gradient-to-br from-indigo-100 via-purple-200 to-indigo-100 p-3 rounded-xl shadow text-3xl border-2 border-purple-200 animate-tilt">
                  📖
                </span>
                <h3 className="text-2xl md:text-3xl font-black text-indigo-800 tracking-tight drop-shadow">
                  Key Acronyms in Kavach System
                </h3>
              </div>
              <p className="text-md md:text-lg text-indigo-500 mb-8 font-medium max-w-2xl leading-relaxed">
                Get familiar with the must-know abbreviations you&apos;ll encounter in Kavach operations, modules, and technical documents. A quick reference for professionals and learners alike!
              </p>
              <div className="overflow-x-auto shadow-lg rounded-xl ring-2 ring-indigo-200/60">
                <table className="min-w-full table-auto bg-gradient-to-br from-white via-blue-50 to-purple-50 rounded-xl text-gray-800">
                  <thead>
                    <tr>
                      <th className="py-4 px-6 text-indigo-700 font-bold uppercase text-xs tracking-widest bg-gradient-to-br from-indigo-50 to-purple-100 border-b-2 border-indigo-100">
                        Acronym
                      </th>
                      <th className="py-4 px-6 text-indigo-700 font-bold uppercase text-xs tracking-widest bg-gradient-to-br from-indigo-50 to-purple-100 border-b-2 border-indigo-100">
                        Explanation
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="hover:bg-indigo-50 transition">
                      <td className="py-2 px-6 font-bold text-purple-700 whitespace-nowrap">ACK</td>
                      <td className="py-2 px-6">Acknowledgement</td>
                    </tr>
                    <tr className="hover:bg-indigo-50 transition">
                      <td className="py-2 px-6 font-bold text-indigo-600">ATP</td>
                      <td className="py-2 px-6">Automatic Train Protection</td>
                    </tr>
                    <tr className="hover:bg-purple-50 transition">
                      <td className="py-2 px-6 font-bold text-purple-600">BIU</td>
                      <td className="py-2 px-6">Brake Interface Unit</td>
                    </tr>
                    <tr className="hover:bg-purple-50 transition">
                      <td className="py-2 px-6 font-bold text-indigo-600">CPU</td>
                      <td className="py-2 px-6">Central Processing Unit</td>
                    </tr>
                    <tr className="hover:bg-indigo-50 transition">
                      <td className="py-2 px-6 font-bold text-blue-700">DAY</td>
                      <td className="py-2 px-6">07:00 to 19:00 Hours</td>
                    </tr>
                    <tr className="hover:bg-purple-50 transition">
                      <td className="py-2 px-6 font-bold text-indigo-600">DMI</td>
                      <td className="py-2 px-6">Driver Machine Interface</td>
                    </tr>
                    <tr className="hover:bg-indigo-50 transition">
                      <td className="py-2 px-6 font-bold text-purple-700">EB</td>
                      <td className="py-2 px-6">Emergency Brake</td>
                    </tr>
                    <tr className="hover:bg-purple-50 transition">
                      <td className="py-2 px-6 font-bold text-blue-700">EoA</td>
                      <td className="py-2 px-6">End of Authority</td>
                    </tr>
                    <tr className="hover:bg-indigo-50 transition">
                      <td className="py-2 px-6 font-bold text-indigo-600">EVL</td>
                      <td className="py-2 px-6">Event Logger Card</td>
                    </tr>
                    <tr className="hover:bg-purple-50 transition">
                      <td className="py-2 px-6 font-bold text-indigo-600">GEN</td>
                      <td className="py-2 px-6">Generate</td>
                    </tr>
                    <tr className="hover:bg-indigo-50 transition">
                      <td className="py-2 px-6 font-bold text-indigo-600">GPS</td>
                      <td className="py-2 px-6">Global Positioning System</td>
                    </tr>
                    <tr className="hover:bg-blue-50 transition">
                      <td className="py-2 px-6 font-bold text-blue-700">GSM</td>
                      <td className="py-2 px-6">Global System for Mobile Communications</td>
                    </tr>
                    <tr className="hover:bg-indigo-50 transition">
                      <td className="py-2 px-6 font-bold text-blue-700">GPRS</td>
                      <td className="py-2 px-6">General Packet Radio Service</td>
                    </tr>
                    <tr className="hover:bg-purple-100 transition">
                      <td className="py-2 px-6 font-bold text-indigo-600">IRSEM</td>
                      <td className="py-2 px-6">Indian Railways Signal Engineering Manual</td>
                    </tr>
                    <tr className="hover:bg-purple-100 transition font-extrabold text-xl">
                      <td className="py-2 px-6 text-purple-700">Kavach</td>
                      <td className="py-2 px-6">
                        <span className="block font-medium text-gray-800">
                          Indian Railways&apos; <span className="font-bold text-purple-700">Automatic Train Protection (ATP)</span> system,
                          <span className="block md:inline"> previously known as the cab signaling based </span>
                          <span className="italic text-indigo-600 font-semibold">Train Collision Avoidance System (TCAS)</span>
                        </span>
                      </td>
                    </tr>
                    <tr className="hover:bg-indigo-50 transition">
                      <td className="py-2 px-6 font-bold text-blue-700">KMS</td>
                      <td className="py-2 px-6">Key Management System</td>
                    </tr>
                    <tr className="hover:bg-purple-50 transition">
                      <td className="py-2 px-6 font-bold text-indigo-600">LCD</td>
                      <td className="py-2 px-6">Liquid Crystal Display</td>
                    </tr>
                    <tr className="hover:bg-indigo-50 transition">
                      <td className="py-2 px-6 font-bold text-indigo-600">LED</td>
                      <td className="py-2 px-6">Light Emitting Diode</td>
                    </tr>
                    <tr className="hover:bg-blue-50 transition">
                      <td className="py-2 px-6 font-bold text-blue-700">LP-OCIP</td>
                      <td className="py-2 px-6">Loco Pilot’s Operation Cum Indication Panel</td>
                    </tr>
                    <tr className="hover:bg-purple-100 transition">
                      <td className="py-2 px-6 font-bold text-indigo-600">LTE</td>
                      <td className="py-2 px-6">Long-Term Evolution</td>
                    </tr>
                    <tr className="hover:bg-blue-50 transition">
                      <td className="py-2 px-6 font-bold text-blue-700">MA</td>
                      <td className="py-2 px-6">Movement Authority</td>
                    </tr>
                    <tr className="hover:bg-indigo-50 transition">
                      <td className="py-2 px-6 font-bold text-blue-700">NIGHT</td>
                      <td className="py-2 px-6">19:00 to 07:00 Hours</td>
                    </tr>
                    <tr className="hover:bg-indigo-50 transition">
                      <td className="py-2 px-6 font-bold text-blue-700">NMS</td>
                      <td className="py-2 px-6">Network Monitoring System</td>
                    </tr>
                    <tr className="hover:bg-purple-50 transition">
                      <td className="py-2 px-6 font-bold text-purple-700">PSR</td>
                      <td className="py-2 px-6">Permanent Speed Restriction</td>
                    </tr>
                    <tr className="hover:bg-blue-50 transition">
                      <td className="py-2 px-6 font-bold text-blue-700">RFID</td>
                      <td className="py-2 px-6">Radio Frequency Identification</td>
                    </tr>
                    <tr className="hover:bg-indigo-50 transition">
                      <td className="py-2 px-6 font-bold text-indigo-600">RF</td>
                      <td className="py-2 px-6">Radio Frequency</td>
                    </tr>
                    <tr className="hover:bg-blue-50 transition">
                      <td className="py-2 px-6 font-bold text-blue-700">RIU</td>
                      <td className="py-2 px-6">Remote Interface Unit</td>
                    </tr>
                    <tr className="hover:bg-blue-50 transition">
                      <td className="py-2 px-6 font-bold text-blue-700">SIL</td>
                      <td className="py-2 px-6">Safety Integrity Level</td>
                    </tr>
                    <tr className="hover:bg-indigo-50 transition">
                      <td className="py-2 px-6 font-bold text-indigo-600">SM</td>
                      <td className="py-2 px-6">Station Master</td>
                    </tr>
                    <tr className="hover:bg-purple-50 transition">
                      <td className="py-2 px-6 font-bold text-indigo-600">SM-OCIP</td>
                      <td className="py-2 px-6">Station Master Operation Cum Indication Panel</td>
                    </tr>
                    <tr className="hover:bg-blue-50 transition">
                      <td className="py-2 px-6 font-bold text-blue-700">SOS</td>
                      <td className="py-2 px-6">Save Our Souls</td>
                    </tr>
                    <tr className="hover:bg-indigo-50 transition">
                      <td className="py-2 px-6 font-bold text-purple-700">SPAD</td>
                      <td className="py-2 px-6">Signal Passing at Danger</td>
                    </tr>
                    <tr className="hover:bg-indigo-50 transition">
                      <td className="py-2 px-6 font-bold text-purple-600">SVK</td>
                      <td className="py-2 px-6">Stationary Vital Kavach</td>
                    </tr>
                    <tr className="hover:bg-purple-50 transition">
                      <td className="py-2 px-6 font-bold text-purple-700">TCAS</td>
                      <td className="py-2 px-6">Train Collision Avoidance System</td>
                    </tr>
                    <tr className="hover:bg-blue-50 transition">
                      <td className="py-2 px-6 font-bold text-indigo-600">TSR</td>
                      <td className="py-2 px-6">Temporary Speed Restriction</td>
                    </tr>
                    <tr className="hover:bg-indigo-50 transition">
                      <td className="py-2 px-6 font-bold text-blue-700">TSRMS</td>
                      <td className="py-2 px-6">Temporary Speed Restriction Management System</td>
                    </tr>
                    <tr className="hover:bg-purple-50 transition">
                      <td className="py-2 px-6 font-bold text-indigo-600">UHF</td>
                      <td className="py-2 px-6">Ultra-High Frequency</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="flex gap-3 mt-6 items-end">
                <span className="inline-block h-2 w-2 rounded-full bg-purple-300 animate-pulse"></span>
                <span className="inline-block h-2 w-2 rounded-full bg-blue-300 animate-pulse"></span>
                <span className="inline-block h-2 w-2 rounded-full bg-indigo-300 animate-pulse"></span>
              </div>
            </div>
          </div>

          {/* Reference Document Number */}
          <div className="flex justify-center mb-4 mt-8">
            <span className="inline-block px-6 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 text-sm rounded-full font-semibold tracking-wider shadow transition-all duration-200">
              Ref: 3778523/2024/O/o ADRM/O/SC/SCR
            </span>
          </div>

          {/* Main Training Module Title */}
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gradient bg-gradient-to-r from-indigo-700 via-blue-600 to-blue-400 bg-clip-text text-transparent drop-shadow mb-2">
              Training Module on Kavach System for Traffic Staff
            </h2>
            <p className="max-w-xl mx-auto text-lg text-gray-600">
              Comprehensive module designed to empower Traffic Staff for safe and effective operations using the Kavach System.
            </p>
          </div>

          {/* Course Content Card */}
          <div className="max-w-2xl mx-auto mb-6 bg-white/80 shadow-xl rounded-2xl p-8 transition hover:shadow-2xl">
            <div className="text-indigo-700 font-bold flex items-center gap-3 mb-4 text-xl">
              <span className="text-2xl">📝</span> Course Content Overview
            </div>
            <div className="mb-4">
              <p className="text-gray-700 mb-2">
                <span className="font-semibold">This training module is intended for:</span>
              </p>
              <ul className="flex flex-wrap gap-4 justify-center mb-4">
                <li className="bg-blue-50 rounded-full px-4 py-1 text-sm font-semibold text-blue-700 shadow">Traffic Inspectors</li>
                <li className="bg-indigo-50 rounded-full px-4 py-1 text-sm font-semibold text-indigo-700 shadow">Station Masters</li>
                <li className="bg-purple-50 rounded-full px-4 py-1 text-sm font-semibold text-purple-700 shadow">Train Managers</li>
                <li className="bg-gray-50 rounded-full px-4 py-1 text-sm font-semibold text-gray-700 shadow">Section Controllers</li>
              </ul>
            </div>
            <table className="min-w-full text-left table-auto bg-white rounded-lg overflow-hidden shadow">
              <thead>
                <tr className="bg-gradient-to-r from-indigo-200 via-blue-200 to-purple-200">
                  <th className="px-5 py-3 text-indigo-900 font-bold text-md">S. No.</th>
                  <th className="px-5 py-3 text-indigo-900 font-bold text-md">Topic</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-blue-50">
                <tr className="hover:bg-blue-50 transition">
                  <td className="px-5 py-2 font-semibold text-indigo-600">1</td>
                  <td className="px-5 py-2">Introduction to Kavach</td>
                </tr>
                <tr className="hover:bg-indigo-50 transition">
                  <td className="px-5 py-2 font-semibold text-indigo-600">2</td>
                  <td className="px-5 py-2">Station Master Operation Cum Indication Panel (SM-OCIP)</td>
                </tr>
                <tr className="hover:bg-blue-50 transition">
                  <td className="px-5 py-2 font-semibold text-indigo-600">3</td>
                  <td className="px-5 py-2">Operational Modes of Onboard Kavach for Version 4.0</td>
                </tr>
                <tr className="hover:bg-indigo-50 transition">
                  <td className="px-5 py-2 font-semibold text-indigo-600">4</td>
                  <td className="px-5 py-2">General Guidelines for Kavach</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="max-w-2xl mx-auto mb-8 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-3xl shadow-2xl p-8 relative overflow-hidden">
            {/* Reference Number */}
            <div className="flex items-center justify-center mb-6">
              <span className="inline-block bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-5 py-2 rounded-full font-bold shadow-md tracking-wide text-sm shadow-indigo-200">
                3778523/2024/O/o ADRM/O/SC/SCR
              </span>
            </div>
            {/* Title */}
            <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-extrabold mb-6 text-indigo-800 tracking-tight drop-shadow-lg flex items-center justify-center gap-2">
              <span className="text-indigo-400">📖</span>
              Training Module on Kavach System for Traffic Staff
            </h2>
            {/* Introduction Section */}
            <div className="bg-white/60 border border-indigo-100 rounded-xl shadow-lg p-6 mb-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl text-purple-500 font-bold">1.</span>
                <h3 className="text-xl sm:text-2xl font-bold text-indigo-700 tracking-tight">Introduction</h3>
              </div>
              <ul className="space-y-4 pl-1">
                <li className="flex items-start gap-3">
                  <span className="text-xl mt-1" role="img" aria-label="shield">🛡️</span>
                  <span className="text-gray-700 leading-relaxed">
                    Indian Railways has developed its own indigenous Automatic Train Protection (ATP) Systems for enhancing safety of running trains. The system was formerly known as Cab-signalling Train Collision Avoidance System (TCAS) which is now called as <span className="font-semibold text-indigo-700">&apos;Kavach&apos;</span>. It has been adopted as our Automatic Train Protection (ATP) System in line with Atma Nirbhar Bharat mission.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-xl mt-1" role="img" aria-label="signal">🚦</span>
                  <span className="text-gray-700 leading-relaxed">
                    Kavach is being provided on sections equipped with Multi Aspect Colour Light Signalling controlled by relay or electronic interlocking. It will be an additional aid to the Loco Pilot and hence, Loco Pilot shall continue to follow prevalent operating and safety rules.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-xl mt-1" role="img" aria-label="speed">⚡</span>
                  <span className="text-gray-700 leading-relaxed">
                    For train speeds beyond 140 KMPH, Automatic Train Protection (ATP) System with Cab Signaling for SPAD mitigation is compulsory in Indian Railways as per Para 7.8.9, table-3 of IRSEM. Based on the Railway Board instructions of date 09.08.2024, Kavach system is getting proliferated in its current RDSO specification - Version 4.0 of Kavach on UHF spot frequencies (MComm) without waiting for LTE. Some of the features like LTE, Temporary Speed Restriction Management System (TSRMS), Neutral Section and Fouling Mark protection will be implemented progressively. The information and procedures about upcoming TSRMS will be included after finalization for field installations.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-xl mt-1" role="img" aria-label="book">📘</span>
                  <span className="text-gray-700 leading-relaxed">
                    This training module has been meticulously designed based on the RDSO specification No. <span className="font-semibold text-indigo-700">RDSO/SPN/196/2020</span>, Version 4.0 (Functional Requirement Specification dated 11.04.2022, System Requirement Specification 16.07.2024, first Product approval awaited) to equip Traffic Staff with the essential knowledge and skills required to understand the Kavach system of working. It intends to achieve effective operations pertaining to Traffic Staff, and ensure the optimal performance of the systems in their professional duties. In today&apos;s rapidly advancing technological landscape, the ability to swiftly and properly operate the system is critical in enhancing operational safety. This module is expected to serve both as a guide and a resource to help achieve these goals.
                  </span>
                </li>
              </ul>
            </div>
            {/* Topics Covered */}
            <div className="bg-gradient-to-r from-indigo-100 via-purple-50 to-blue-50 rounded-xl border border-indigo-200 shadow p-6">
              <h4 className="font-bold text-indigo-800 text-lg mb-2 flex items-center gap-2">
                <span className="text-purple-500">📝</span> The training module covers a wide range of topics, including:
              </h4>
              <ul className="space-y-4 text-gray-700 font-medium">
                <li className="flex items-start gap-3">
                  <span className="text-lg mt-1" role="img" aria-label="network">🔗</span>
                  <span>Familiarizing with the various sub systems of Kavach.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-lg mt-1" role="img" aria-label="control panel">🕹️</span>
                  <span>Working of Station Master Operation Cum Indication Panel (SM-OCIP).</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-lg mt-1" role="img" aria-label="mode">⚙️</span>
                  <span>Various Operational Modes of Onboard Kavach for Version 4.0.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-lg mt-1" role="img" aria-label="guidelines">📋</span>
                  <span>General Guidelines.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Kavach and Its Sub Systems */}
          <div className="mt-10 mb-8">
            <h2 className="text-2xl md:text-3xl font-black text-indigo-700 flex items-center gap-2 mb-4">
              <span className="text-purple-500 text-3xl">🔹</span>
              2. Kavach and its Sub Systems
            </h2>
            <div className="bg-gradient-to-r from-indigo-100 via-white to-purple-50 rounded-2xl shadow-lg p-6 border border-indigo-200">
              {/* Salient Features */}
              <h3 className="text-xl sm:text-2xl font-bold text-purple-700 flex items-center gap-2 mb-2">
                <span className="text-indigo-400">✨</span>
                2.1 Salient Features of Kavach
              </h3>
              <ul className="space-y-6 mt-3 text-gray-800 font-medium">
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 text-2xl" title="Shield">🛡️</span>
                  <span>
                    <span className="font-bold text-indigo-700">Safety Aid:</span> Kavach acts as an added safety shield for the Loco Pilot, helping avoid unsafe situations arising from non-adherence to signalling or speed restrictions.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 text-2xl" title="Signal">🚦</span>
                  <span>
                    <span className="font-bold text-indigo-700">Staff Responsibility:</span> Installation of Kavach does <span className="italic">not</span> absolve railway personnel of their responsibility for complying with speed limits and signals.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 text-2xl" title="Rules Document">📜</span>
                  <span>
                    <span className="font-bold text-indigo-700">Operational Compliance:</span> The use of Kavach does <span className="italic">not</span> override or infringe any rules of regular or unusual train operations (refer G&amp;SR).
                  </span>
                </li>
                
                {/* Basic Functions (Icon: Gears) */}
                <li>
                  <div className="mb-2 font-semibold text-indigo-800 flex items-center gap-2">
                    <span className="text-2xl">⚙️</span>
                    <span>Basic Functions of Kavach</span>
                    <span className="italic text-indigo-400">(vary depending on operational mode)</span>
                  </div>
                  <ul className="space-y-3 ml-7">
                    <li className="flex gap-2 items-start">
                      <span className="text-xl" title="Danger">⛔</span>
                      <span>
                        <span className="font-semibold text-indigo-600">SPAD Mitigation:</span> Additional aid to mitigate risks from <b>S</b>ignal <b>P</b>assed <b>A</b>t <b>D</b>anger. Automatically applies brakes if speed limits are violated or the Loco Pilot fails to act in time.
                      </span>
                    </li>
                    <li className="flex gap-2 items-start">
                      <span className="text-xl" title="Speedometer">🏎️</span>
                      <span>
                        <span className="font-semibold text-indigo-600">Continuous Speed Supervision:</span> Controls speed above sectional, permanent, and loop line speed (Temporary Speed Restrictions will be included later).
                      </span>
                    </li>
                    <li className="flex gap-2 items-start">
                      <span className="text-xl" title="Authority">🛤️</span>
                      <span>
                        <span className="font-semibold text-indigo-600">Movement Authority Supervision:</span> Ensures train speed remains within authorized limits.
                      </span>
                    </li>
                    <li className="flex gap-2 items-start">
                      <span className="text-xl" title="Collision Prevention">💥</span>
                      <span>
                        <span className="font-semibold text-indigo-600">Collision Protection:</span> Prevents head-on, rear-end, and side collisions (works only if both locos are equipped with functional Kavach).
                      </span>
                    </li>
                    <li className="flex gap-2 items-start">
                      <span className="text-xl" title="Display">🖥️</span>
                      <span>
                        <span className="font-semibold text-indigo-600">Cab Display:</span> Shows signal aspects and movement authority directly in the loco pilot’s cab.
                      </span>
                    </li>
                    <li className="flex gap-2 items-start">
                      <span className="text-xl" title="Dial">📈</span>
                      <span>
                        <span className="font-semibold text-indigo-600">Unified Speed Dial:</span> Displays section speed, permitted speed, target speed, and current speed all on a single dial.
                      </span>
                    </li>
                    <li className="flex gap-2 items-start">
                      <span className="text-xl" title="Whistle">🎺</span>
                      <span>
                        <span className="font-semibold text-indigo-600">Auto Whistling:</span> Automatically blows the whistle at Level Crossing Gates when applicable.
                      </span>
                    </li>
                  </ul>
                </li>

                {/* Protection Categories (Icon: Puzzle) */}
                <li>
                  <div className="mb-1 font-semibold text-indigo-800 flex items-center gap-2">
                    <span className="text-2xl">🧩</span>
                    <span>Kavach offers two broad categories of protection:</span>
                  </div>
                  <ol className="list-decimal ml-8 space-y-3">
                    <li className="flex gap-3 items-start">
                      <span className="text-xl" title="Loco">🚂</span>
                      <span>
                        <span className="font-semibold text-purple-700">Category (I):</span> Protection against inadequate braking by Loco Pilot in his own Loco.<br />
                        <span className="text-gray-600">
                          <span className="mr-1 text-gray-400">•</span>
                          <span className="font-medium text-indigo-700">Examples:</span> Collision due to SPAD, over-speed (speed restrictions, turnouts), and rollback protection. <span className="italic text-green-700">Fully effective with onboard Kavach; protections are guaranteed as claimed.</span>
                        </span>
                      </span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <span className="text-xl" title="Events">⚡</span>
                      <span>
                        <span className="font-semibold text-purple-700">Category (II):</span> Protection against unusual events due to external factors.<br />
                        <span className="text-gray-600">
                          <span className="mr-1 text-gray-400">•</span>
                          <span className="font-medium text-indigo-700">Examples:</span> Hitting derailed train, inconsistent routing with signal, SoS scenarios. <span className="italic text-orange-500">These protections are not always guaranteed and sometimes work via RFID even without full station equipment, using direct onboard-to-onboard MComm.</span>
                        </span>
                      </span>
                    </li>
                  </ol>
                </li>
              </ul>
            </div>
          </div>

          <div className="my-10">
            <h3 className="text-2xl font-bold text-indigo-800 mb-3 flex items-center gap-2">
              <span className="text-blue-400">🔧</span> 2.2 Components of Kavach
            </h3>
            <p className="text-gray-700 mb-5">
              The Kavach System comprises of:
            </p>
            <ol className="list-decimal ml-8 space-y-3 mb-6">
              <li>
                <span className="inline-flex items-center gap-2 text-blue-700 font-semibold">
                  <span className="text-xl">🛤️</span> 
                  Track side equipment:
                </span> 
                <span className="text-gray-700"> RFID tag, Stationary Kavach Unit, Tower, Radio &amp; Antenna, SM Operating cum Indication panel.</span>
              </li>
              <li>
                <span className="inline-flex items-center gap-2 text-indigo-700 font-semibold">
                  <span className="text-xl">🚂</span> 
                  On-board equipment (Loco Kavach):
                </span> 
                <span className="text-gray-700"> RFID reader, Loco Kavach Vital computer, LP-OCIP (Driver Machine Interface), BIU (Brake Interface Unit), Loco Kavach Radio Unit.</span>
              </li>
            </ol>

            <h4 className="text-xl font-semibold text-purple-800 mb-3 flex items-center gap-2">
              <span className="text-yellow-400">🗝️</span> Key Components – a brief
            </h4>
            <ul className="space-y-4 ml-2">
              <li className="flex items-start gap-2">
                <span className="text-green-600 text-lg" title="RFID Tag">🏷️</span>
                <span>
                  <span className="font-bold text-blue-700">RFID Tags:</span> Fastened to track sleepers at regular intervals, these tags transfer track information and location data to the on-board KAVACH computer.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-indigo-700 text-lg" title="Stationary Unit">🏠</span>
                <span>
                  <span className="font-bold text-indigo-700">Stationary Kavach Unit:</span> Stationary Kavach Unit is located in Relay Room/Electronic Interlocking Room. It consists of a Vital Computer and Radio Modems, receiving information from signalling and interlocking systems and generating messages for the Onboard (Locomotive).
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-600 text-lg" title="Tower & Antenna">📡</span>
                <span>
                  <span className="font-bold text-purple-700">Tower, Radio and Antenna:</span> Towers are located at the block stations, Interlocked LC gates, IB huts and Mid-section for auto signals wherever Stationary Kavach is installed, as per need.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-pink-600 text-lg" title="SM Panel">🖥️</span>
                <span>
                  <span className="font-bold text-pink-700">SM Operation cum Indication Panel:</span> SMOCIP is a part of Station Kavach. It is a display unit provided to the Station Master. It is placed in SM office. It is operated by Station Master as and when necessary, like manual SOS generation etc.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 text-lg" title="RFID Reader">🔎</span>
                <span>
                  <span className="font-bold text-blue-700">RFID Reader:</span> It is placed underneath the Locomotive to read the RFID tags.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-indigo-700 text-lg" title="Vital Computer">💻</span>
                <span>
                  <span className="font-bold text-indigo-700">Loco Kavach Vital Computer:</span> The Vital Computer interfaces with the locomotive and its subsystems. It receives information from signaling and interlocking systems, and relays messages to the locomotive through the Radio Unit.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 text-lg" title="DMI">🕹️</span>
                <span>
                  <span className="font-bold text-blue-700">Driver Machine Interface:</span> It is a part of Loco Kavach. DMI is a display panel in the locomotive cab that provides real-time information about the track conditions, movement authority, signal aspects, and allows LP to acknowledge warnings or initiate emergency actions through buttons.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 text-lg" title="Brake">🛑</span>
                <span>
                  <span className="font-bold text-red-700">Brake Interface Unit:</span> It is a part of Loco Kavach. It executes the brake commanded by Onboard Vital Computer automatically when Loco pilot is not controlling the speed in commensuration with permitted speed which is based on signalling information including permanent speed restrictions, gradient, braking characteristics of train.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-indigo-600 text-lg" title="Radio Unit">📶</span>
                <span>
                  <span className="font-bold text-indigo-700">Loco Kavach Radio Unit:</span> It is fitted in the Loco. It is the onboard radio communication device that enables the Loco to receive signaling information from trackside Kavach units via radio waves. There is provision of Direct Onboard-to-Onboard Communication also in existing radio communication backbone (MComm) of Kavach.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-600 text-lg" title="NMS">📝</span>
                <span>
                  <span className="font-bold text-orange-700">Network Monitoring System (NMS):</span> Logs train movements, inputs, and fault messages. It automatically alerts the fault teams to address issues.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-600 text-lg" title="KMS">🔐</span>
                <span>
                  <span className="font-bold text-yellow-700">Key Management System (KMS):</span> Ensures secure exchange of Movement Authorities between Stationary Kavach and Onboard Kavach systems.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-600 text-lg" title="Communication">🔄</span>
                <span>
                  <span className="font-bold text-purple-700">Kavach Communication:</span><br/>
                  <ul className="ml-7 list-disc space-y-2">
                    <li>
                      <span className="inline-flex items-center gap-1">
                        <span className="text-blue-500">🔁</span>
                        Radio communication network is used for the bi-directional exchange of information between Stationary Kavach and Onboard Kavach and direct Communication among Onboard to Onboard Kavach.
                      </span>
                    </li>
                    <li>
                      <span className="inline-flex items-center gap-1">
                        <span className="text-green-500">📶</span>
                        Radio communication channels are in dual arrangement which are used in alternate time cycles with separate cable and antenna for each radio, which also acts as hot standby.
                      </span>
                    </li>
                    <li>
                      <span className="inline-flex items-center gap-1">
                        <span className="text-red-500">⏲️</span>
                        Timeout due to radio communication failure shall be deemed to occur when 30 seconds (configurable) for Absolute Block Section and 10 seconds (configurable) for Automatic Block Section have passed since the last packet received from SKavach in the communication mandatory area.
                      </span>
                    </li>
                  </ul>
                </span>
              </li>
            </ul>
          </div>
          {/* 2.3 Kavach Arrangements in Station at a Glance & 2.5 Working Principle */}
          <div className="mt-8 mb-8">
            {/* Section Title */}
            <h3 className="text-2xl font-bold text-blue-800 flex items-center gap-2 mb-4">
              <span className="text-indigo-500">🏫</span>
              2.3 Kavach Arrangements in Station at a Glance
            </h3>
            <ul className="space-y-4 ml-4">
              <li className="flex items-start gap-2">
                <span className="text-purple-500 text-lg" title="RFID">📡</span>
                <span>RFID Tags are provided in station yard for each signal, signal approach and turnouts and in block section within 1000m for giving Trackside information to Loco Kavach unit.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 text-lg" title="Installation method">🛠️</span>
                <span>RFID tags shall be fixed at the center of PSC Sleepers. No holes shall be drilled in the Sleepers and the arrangement of fixing must be through clamps only.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 text-lg" title="Speed">🚄</span>
                <span>These RFID tags are suitable for reliable working for train speed up to 200 kmph.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 text-lg" title="Waterproof">💧</span>
                <span>These RFID tags are able to work even when submerged in water up to rail level.</span>
              </li>
            </ul>

            {/* 2.5 Working Principle */}
            <h3 className="text-2xl font-bold text-indigo-800 flex items-center gap-2 mt-8 mb-4">
              <span className="text-yellow-500">⚙️</span>
              2.5 Working Principle
            </h3>
            {/* Movement Authority and EoA */}
            <div className="ml-2 mb-4">
              <div className="flex items-start gap-2 mb-2">
                <span className="text-purple-700 text-lg">🚦</span>
                <div>
                  <span className="font-bold">Movement Authority:&nbsp;</span>
                  It is the distance up to which the train is permitted to travel safely. When deployed with lineside signals, the calculation of Movement Authority (MA) depends upon signal aspect sequence.
                </div>
              </div>
              <div className="flex items-start gap-2 mb-2">
                <span className="text-red-600 text-lg">🛑</span>
                <div>
                  <span className="font-bold">End of Authority (EoA):&nbsp;</span>
                  It is the location up to which the train is permitted to proceed and where the target speed is zero.
                </div>
              </div>
            </div>
            {/* Radio Communication */}
            <div className="flex items-start gap-2 mb-4">
              <span className="text-blue-500 text-lg">📶</span>
              <span>
                Kavach system uses radio communication for exchanging information between Loco and Station, through the RF Communication towers which are located near stations, interlocked LC gates, IB huts and mid-section for auto signals. Station Kavach and Loco Kavach units communicate with each other every 2 seconds.
              </span>
            </div>
            {/* Speed Profiles */}
            <div className="mb-2">
              <div className="flex items-start gap-2 mb-2">
                <span className="text-green-600 text-lg">📈</span>
                <span>
                  <span className="font-bold">Speed profiles:&nbsp;</span>
                  Kavach supervises the speed of Loco/Train based on certain parameters like Dynamic Speed Profile and Static Speed Profile.
                </span>
              </div>
              <ul className="ml-8 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-indigo-500 text-md">🔄</span>
                  <span>
                    <span className="font-bold">Dynamic Speed Profile:</span> the speed-distance curve which a train shall follow without violating the static train speed profile till the end of Movement Authority. This curve depends on the braking characteristics of the train and train length.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 text-md">🛤️</span>
                  <span>
                    <span className="font-bold">Static Speed Profile:</span> it is a description of the fixed speed restriction at a resolution of 5 kmph for a part of track sent from trackside to train.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* 3. Station Master Operation cum Indication Panel (SMOCIP) */}
          <div className="mb-8 px-2">
            <h3 className="text-2xl font-bold text-indigo-800 mb-2 flex items-center gap-2">
              <span className="text-purple-600">🎛️</span>
              3. Station Master Operation cum Indication Panel (SMOCIP)
            </h3>
            <h4 className="text-lg font-semibold text-indigo-700 mb-4 flex items-center gap-2">
              <span className="text-blue-500">ℹ️</span>
              3.1 Introduction to SM-OCIP
            </h4>
            <ul className="space-y-4 ml-3">
              <li className="flex gap-3 items-start">
                <span className="text-green-600 text-xl mt-0.5">💺</span>
                <span>
                  The Station Master Operation Cum Indication Panel (SM-OCIP) is installed on Station Master&apos;s table or a nearby place such that it is accessible and visible to the Station Master.
                </span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-blue-700 text-xl mt-0.5">📖</span>
                <span>
                  The system of working and Station Master’s operations pertaining to Station Master Operation Cum Indication Panel (SM-OCIP) shall be incorporated in Appendix-C of Station Working Rules (SWR) of the stations which are equipped with Kavach.
                </span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-purple-600 text-xl mt-0.5">💡</span>
                <span>
                  The Station Master can monitor the statuses of SOS reception, SOS generation and System health through LED indications mounted on the SM-OCIP module.
                </span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-red-500 text-xl mt-0.5">🔑</span>
                <span>
                  All operations on SMOCIP can be performed only when the SM’s key is inserted and turned to ‘IN’ position. On duty SM is responsible for operation of SM-OCIP and safe custody of keys to prevent unauthorized operation.
                </span>
              </li>
            </ul>
          </div>

          <div className="mb-8 px-2">
            <h4 className="text-xl font-bold text-indigo-800 mb-4 flex items-center gap-2">
              <span className="text-purple-600">📝</span>3.2 Provisions in Station Master Operation Cum Indication Panel
            </h4>
            <div className="mb-4">
              <h5 className="text-lg font-semibold text-indigo-700 flex items-center gap-2 mb-2"><span className="text-blue-600">🧩</span>Features available in SMOCIP:</h5>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start gap-2"><span className="text-gray-700">🔑</span>Station Master’s Key (with ON/OFF or IN/OUT Position)</li>
                <li className="flex items-start gap-2"><span className="text-blue-600">🖥️</span>LCD display (4 Line x 20 characters)</li>
                <li className="flex items-start gap-2"><span className="text-red-500">🚨</span>SOS indication</li>
                <li className="flex items-start gap-2"><span className="text-green-600">🟢</span>Health indications (Green and Red)</li>
                <li className="flex items-start gap-2"><span className="text-yellow-500">🔔</span>Audio Buzzer</li>
                <li className="flex items-start gap-2"><span className="text-indigo-600">🔘</span>Three Push Buttons (Common, Cancel and SOS)</li>
                <li className="flex items-start gap-2"><span className="text-gray-900">🧮</span>Electromechanical non-resettable 6-digit counter for recording SOS operation</li>
                <li className="flex items-start gap-2"><span className="text-purple-600">⚡</span>TSR / Ack button (Ack Function currently in use, TSR Functionality for future use)</li>
              </ul>
            </div>
            <div className="mb-4">
              <h5 className="text-lg font-semibold text-indigo-700 flex items-center gap-2 mb-2"><span className="text-blue-500">💡</span>LED Indications and Actions:</h5>
              <div className="overflow-x-auto rounded-lg">
                <table className="min-w-full border border-blue-100 text-sm bg-white shadow-sm">
                  <thead className="bg-gradient-to-r from-blue-50 to-indigo-50 text-indigo-900">
                    <tr>
                      <th className="px-4 py-1 font-bold">LED Name</th>
                      <th className="px-4 py-1 font-bold">Indication</th>
                      <th className="px-4 py-1 font-bold">What it means</th>
                      <th className="px-4 py-1 font-bold">Action by SM</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-blue-50 text-gray-700">
                    <tr>
                      <td className="px-4 py-2 flex items-center gap-1"><span className="text-green-500">HEALTH OK</span></td>
                      <td className="px-4 py-2">🟢 GREEN</td>
                      <td className="px-4 py-2">Normal</td>
                      <td className="px-4 py-2">-</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 flex items-center gap-1"><span className="text-green-500">HEALTH OK</span></td>
                      <td className="px-4 py-2">⚪️ Blank</td>
                      <td className="px-4 py-2">Station Kavach Unhealthy</td>
                      <td className="px-4 py-2">Inform S&amp;T staff</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 flex items-center gap-1"><span className="text-red-500">HEALTH FAIL</span></td>
                      <td className="px-4 py-2">🔴 RED</td>
                      <td className="px-4 py-2">Station Kavach Unhealthy</td>
                      <td className="px-4 py-2">Inform S&amp;T staff</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 flex items-center gap-1"><span className="text-red-500">HEALTH FAIL</span></td>
                      <td className="px-4 py-2">⚪️ Blank</td>
                      <td className="px-4 py-2">Normal</td>
                      <td className="px-4 py-2">-</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 flex items-center gap-1"><span className="text-red-500">SOS</span></td>
                      <td className="px-4 py-2"><span className="animate-pulse">🔴 (blink)</span></td>
                      <td className="px-4 py-2">
                        <div>When SOS generated from Station</div>
                        <div>When SOS received from on board Kavach</div>
                      </td>
                      <td className="px-4 py-2">
                        <div>Inform all concerned</div>
                        <div>Acknowledge in SMOCIP and inform all concerned</div>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 flex items-center gap-1"><span className="text-red-500">SOS</span></td>
                      <td className="px-4 py-2">⚪️ Blank</td>
                      <td className="px-4 py-2">Normal</td>
                      <td className="px-4 py-2">-</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="mb-4">
              <h5 className="text-lg font-semibold text-indigo-700 flex items-center gap-2 mb-2"><span className="text-purple-600">🔲</span>Button Description:</h5>
              <div className="overflow-x-auto rounded-lg">
                <table className="min-w-full border border-blue-100 text-sm bg-white shadow-sm">
                  <thead className="bg-gradient-to-r from-blue-50 to-indigo-50 text-indigo-900">
                    <tr>
                      <th className="px-4 py-1 font-bold">Button</th>
                      <th className="px-4 py-1 font-bold">Color</th>
                      <th className="px-4 py-1 font-bold">Description</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-blue-50 text-gray-700">
                    <tr>
                      <td className="px-4 py-2 flex items-center gap-1"><span className="text-black">COMMON</span></td>
                      <td className="px-4 py-2">⚫️ BLACK</td>
                      <td className="px-4 py-2">Common switch to press along with SOS/Cancel switch</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 flex items-center gap-1"><span className="text-blue-600">CANCEL</span></td>
                      <td className="px-4 py-2">🔵 BLUE</td>
                      <td className="px-4 py-2">To cancel the SOS from station</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 flex items-center gap-1"><span className="text-red-600">SOS</span></td>
                      <td className="px-4 py-2">🔴 RED</td>
                      <td className="px-4 py-2">To generate SOS from Station</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 flex items-center gap-1"><span className="text-yellow-500">TSR / ACK</span></td>
                      <td className="px-4 py-2">🟡 YELLOW</td>
                      <td className="px-4 py-2">To acknowledge<br/>(TSR usage will be instructed later when TSRMS becomes operational)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="mb-4">
              <h5 className="text-lg font-semibold text-indigo-700 flex items-center gap-2 mb-2"><span className="text-green-600">🖥️</span>Information displayed on LCD:</h5>
              <ul className="space-y-1 ml-4">
                <li className="flex items-start gap-2"><span className="text-indigo-600">#️⃣</span>Station ID, KMS Key Index, TSR Count (for future use) along with the Station Kavach OK or FAIL.</li>
                <li className="flex items-start gap-2"><span className="text-purple-600">⚙️</span>Sub-System faults information and Station Kavach Manual SOS generated and Cancelled information shall be displayed and SOS messages shall disappear after 30 seconds.</li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">📝</span>
                  <span>
                  The display on LCD panel is as follows:<br/>
                  <span className="inline-block pl-6"><span className="font-mono text-sm">Line-1: ID:00531 KI: XX T: XX</span></span><br/>
                  <span className="inline-block pl-6"><span className="font-mono text-sm">Line-2: SOS GENERATED,</span></span><br/>
                  <span className="inline-block pl-6"><span className="font-mono text-sm">Line-3: SOS CANCELLED</span></span><br/>
                  <span className="inline-block pl-6"><span className="font-mono text-sm">Line-4: STN Kavach OK/SYSTEM LINK FAIL</span></span>
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="text-lg font-semibold text-indigo-700 flex items-center gap-2 mb-2"><span className="text-yellow-600">🔔</span>Audio Buzzer:</h5>
              <ul className="ml-4 space-y-1">
                <li className="flex items-start gap-2">
                  <span className="text-red-500">🚨</span>
                  <span>
                    This will sound along with SOS LED Red blinking when manual SOS is generated / received along with which the counter will register next number.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mb-8">
            <h4 className="text-2xl font-extrabold text-indigo-700 flex items-center gap-2 mb-4">
              <span className="text-red-500">🛑</span>
              3.3 Manual SOS Generation / Cancellation
            </h4>
            <ol className="space-y-3 pl-2">
              <li className="flex items-start gap-2">
                <span className="text-yellow-600 text-lg">🔑</span>
                <span>
                  As soon as the Station Master (SM) notices or receives any information/message that endangers or may endanger train movement and needs to stop a train, SM shall insert the SM’s Key and turn it to ‘In/ON’ and press <span className="text-red-600 font-bold">‘SOS’</span> and <span className="text-blue-600 font-bold">‘Common’</span> buttons simultaneously to generate the SOS.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-indigo-500 text-lg">📡</span>
                <span>
                  The SOS as generated above will be communicated to all the functional Kavach locos/trains in vicinity and brakes will be applied automatically to those Onboard / Loco Kavach within a radius of <span className="font-bold text-blue-600">3000m</span> from SOS generating Station Kavach to bring the train/trains to <span className="font-semibold text-purple-700">STOP DEAD (STANDSTILL)</span>.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 text-lg">🧑‍✈️</span>
                <span>
                  After the train is brought to STOP DEAD (STANDSTILL), <span className="font-semibold text-indigo-700">Loco Pilot</span> shall acknowledge the SOS, for releasing the brakes. Loco Pilot shall further handle the train based on the information received from Station Master. Further, train speed shall be supervised by <span className="font-bold text-indigo-800">KAVACH</span> for <span className="font-bold text-blue-600">30kmph</span> (configurable) till the train passes the originating Location of &quot;<span className="font-mono text-red-600">SOS</span>&quot; message.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-700 text-lg">❎</span>
                <span>
                  After taking suitable precautionary actions and the cause of obstruction is removed, the SM shall cancel the SOS message by pressing <span className="text-blue-600 font-bold">‘Cancel’</span> and <span className="font-bold text-blue-600">‘Common’</span> buttons simultaneously.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-600 text-lg">⏲️</span>
                <span>
                  The Manual SOS generated as above, will be communicated by Station KAVACH every 2 seconds and the speed of such trains shall be restored only if any <span className="font-bold">one</span> of the following conditions is satisfied:
                  <ul className="pl-6 mt-2 space-y-0.5">
                    <li className="flex items-start gap-1"><span className="text-green-600">✔️</span> SOS message is cancelled by the source.</li>
                    <li className="flex items-start gap-1"><span className="text-blue-600">🚉</span> Train is moved away more than <span className="font-bold">1500m</span> (Configurable) from the source.</li>
                    <li className="flex items-start gap-1"><span className="text-gray-600">⏳</span> If the SOS message reception is not there from the source for more than three minutes.</li>
                  </ul>
                  Kavach equipment shall log the events of sending and receiving of SOS in the Event Logger.
                </span>
              </li>
            </ol>
          </div>

          <div className="mb-8">
            <h4 className="text-2xl font-extrabold text-indigo-700 flex items-center gap-2 mb-4">
              <span className="text-yellow-500">✅</span>
              3.4 SOS Acknowledgement by SM
            </h4>
            <div className="flex items-start gap-2 ml-4">
              <span className="text-yellow-600">🟡</span>
              <span>
                <span className="font-bold">TSR-ACK button</span> (Yellow colour) has to be pressed to acknowledge display screen and buzzer.
              </span>
            </div>
          </div>

          <div className="mb-8">
            <h4 className="text-2xl font-extrabold text-indigo-700 flex items-center gap-2 mb-4">
              <span className="text-red-400">📝</span>
              3.5 Reporting of Kavach Failures
            </h4>
            <div className="flex items-start gap-2 ml-4">
              <span className="text-blue-700">📖</span>
              <span>
                A log of every failure displayed and its restoration has to be maintained in a separate register and information to be given to <span className="font-semibold text-indigo-700">S&amp;T department</span>.
              </span>
            </div>
          </div>

          <div className="mb-8">
            <h4 className="text-2xl font-extrabold text-indigo-700 flex items-center gap-2 mb-4">
              <span className="text-indigo-400">🔄</span>
              3.6 Variations in Station Master Operation Cum Indication Panel (SMOCIP) in different makes
            </h4>
            <div className="flex items-start gap-2 ml-4">
              <span className="text-gray-700">🏢</span>
              <span>
                At present, there are three makes of <span className="font-bold">SM-OCIP</span> being used in SCR namely – <strong>Medha make</strong>, <strong>Kernex make</strong>, and <strong>HBL make</strong>. There may be slight variation of the indications/provision of buttons. For reference, the photographs of different makes of SM-OCIP are provided below –
              </span>
            </div>
          </div>
          
        </div>

        {/* Decorative Elements */}
        <div className="mt-12 flex justify-center space-x-4">
          <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
          <div className="w-3 h-3 bg-indigo-400 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
          <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
        </div>
      </div>
    </div>
  )
}

export default Kavach