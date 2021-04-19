import "./detailsText.scss";

export default () => {

  const reasons = [
    'How remote work broadens the talent pool',
    'The productivity results behind distributed teams',
    'An increase in diversity as a result of remote recruitment',
    'Money saved on operational costs and salary negotiations'
  ];

  return <section className="details-text">
    <p>
      The results are in, and the verdict? Remote is here to stay. Thanks to a global pandemic companies have had to
      reevaluate the power of distributed workforces and we’ve put together all the reasons why going remote is the right
      move to make. In this infographics, you’ll see:
    </p>

    <ul>
      {reasons.map((reason, key) => <li key={key}>{reason}</li>)}
    </ul>

    <p>
      What better time to refresh your strategy than on the brink of a whole new world? Dig into this list of recruiting methodologies and adjust your sails for the future!
    </p>

  </section>
}
