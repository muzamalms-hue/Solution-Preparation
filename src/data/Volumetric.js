export default [
  {
  name: "2 N Acetic Acid VS",
  strength: "2 N",

  formula:
    "N = (mL NaOH × N NaOH) / mL acetic acid",

  preparation:
    "Transfer 116 mL of glacial acetic acid to a 1000-mL volumetric flask containing about 500 mL of water. Cool and dilute with water to volume.",

  standardization:
    "Accurately transfer 10 mL of the 2 N acetic acid solution to a beaker. Add 50 mL of carbon dioxide-free water. Titrate potentiometrically with 1 N sodium hydroxide VS."
},

  {
  name: "0.2 N Alcoholic Potassium Hydroxide VS",
  strength: "0.2 N",

  preparation:
    "Dissolve about 14 g of potassium hydroxide in 20 mL of water, and add aldehyde-free alcohol to make 1000 mL. Allow the solution to stand in a tightly stoppered bottle for 24 h. Then quickly decant the clear supernatant into a suitable, tight container. Store in tightly stoppered bottles, protected from light.",

  standardization:
    "Accurately measure 10 mL of 0.5 N hydrochloric acid VS. Dilute with 50 mL of water, add 2 drops of phenolphthalein TS, and titrate with the alcoholic potassium hydroxide solution until a permanent pale pink color is produced.",

  formula:
    "N = (mL HCl × N HCl) / mL KOH"
  },
  {
  name: "0.1 N Ammonium Thiocyanate VS",
  strength: "0.1 N",

  preparation:
    "Dissolve about 8 g of ammonium thiocyanate in 1000 mL of water.",

  standardizationVisualEndpoint:
    "Accurately measure about 30 mL of 0.1 N silver nitrate VS into a glass-stoppered flask. Dilute with 50 mL of water, then add 2 mL of nitric acid and 2 mL of ferric ammonium sulfate TS, and titrate with the ammonium thiocyanate solution to the first appearance of a red-brown color.",

  standardizationPotentiometricEndpoint:
    "Accurately measure about 10 mL of 0.1 N silver nitrate VS into a glass-stoppered flask. Dilute with 50 mL of water, add 2 mL of nitric acid, and titrate potentiometrically with the ammonium thiocyanate solution using a silver indicating electrode and an appropriate reference electrode or a combined silver electrode.",

  formula:
    "N = (mL AgNO3 × N AgNO3) / mL NH4SCN Solution"
  },

  {
  name: "0.05 M Barium Perchlorate VS",
  strength: "0.05 M",

  dilutedAceticAcidSolution:
    "Transfer 28.5 mL of glacial acetic acid to a 100-mL volumetric flask. Dilute with water to volume.",

  dilutedAmmoniaSolution:
    "Transfer 75 mL of stronger ammonia water to a 100-mL volumetric flask. Dilute with water to volume.",

  bufferSolutionPH37:
    "Transfer 15.0 mL of Diluted acetic acid solution to a 100-mL volumetric flask. Add 60 mL of alcohol and 20 mL of water. Adjust with Diluted ammonia solution to a pH of 3.7. Dilute with water to volume.",

  preparation:
    "Dissolve 15.8 g of barium hydroxide in a mixture of 7.5 mL of perchloric acid and 75 mL of water. Adjust with perchloric acid to a pH of 3 and filter if necessary. Add 150 mL of alcohol and dilute with water to 250 mL. Dilute with Buffer solution pH 3.7 to 1000 mL.",

  standardizationVisualEndpoint:
    "Transfer 10 mL of 1 N sulfuric acid VS to a 100 mL volumetric flask and dilute to volume with water. To 5.0 mL of 0.1 N sulfuric acid add 5 mL of water, 50 mL of Buffer solution pH 3.7, and 0.5 mL of sodium alizarinsulfonate TS. Titrate with the Barium perchlorate solution until an orange-red color appears. Standardize immediately before use.",

  formulaVisualEndpoint:
    "M = (mL sulfuric acid × N sulfuric acid × 0.5) / mL barium perchlorate",

  ammoniaBufferSolutionPH10:
    "Transfer 54 g of ammonium chloride to a 1000 mL volumetric flask containing about 200 mL of water, swirl until dissolved. Add 350 mL of 25% ammonia water. Dilute to volume with water.",

  standardizationPotentiometricEndpoint:
    "To 50 mL of water, add 10.0 mL of 0.05 M barium perchlorate solution, 5 mL of Ammonia buffer solution pH 10 and 1 mL of Copper–EDTA complex solution. Titrate potentiometrically with 0.05 M edetate disodium VS using a copper ion-selective electrode. Standardize immediately before use.",

  formulaPotentiometricEndpoint:
    "M = (mL edetate solution × N edetate solution) / mL barium perchlorate"
  }
  ]
