import React, { useEffect, useState } from 'react';
import axios from 'axios';

const LOG_INDENT = '[Install::DownloadLatest] %s';

const DownloadLink = () => {
  const [downloadUrl, setDownloadUrl] = useState('');

  useEffect(() => {
    const fetchLatestRelease = async () => {
      try {
        const response = await axios.get('https://api.github.com/repos/SomeRandomGuy45/MacBlox/releases/latest');
        const assets = response.data.assets;
        const dmgAsset = assets.find(asset => asset.name === 'Macblox.dmg');
        if (dmgAsset) {
          setDownloadUrl(dmgAsset.browser_download_url);
        }
        console.log(LOG_INDENT, 'fetched the latest release:', dmgAsset.browser_download_url);
      } catch (error) {
        console.error(LOG_INDENT, 'failed fetching the latest release', error);
      }
    };

    fetchLatestRelease();
  }, []);

  return (
    <div className="container">
      <div>
        {downloadUrl ? (
          <a
            className="button button--secondary button--lg"
            href={downloadUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Download Macblox DMG
          </a>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default DownloadLink;
