import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
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
    <div>
        {downloadUrl ? (
          <Link
            className="button button--secondary button--lg"
            href={downloadUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Download Macblox DMG
          </Link>
        ) : (
          <p>Loading...</p>
        )}
      </div>
  );
};

export default DownloadLink;
