import React from 'react';

import SEO from '../components/seo';
import Panel from '../components/panel';
import LinkOut from '../components/LinkOut';
import Layout from '../components/layout';
import TopPanel from '../components/topPanel';
import ButtonLink from '../components/buttonLink';

import HorizontalTitle from '../components/horizontalTitle';
import HorizontalButtonsContainer from '../components/horizontalButtonsContainer';

import ndexLogo from '../images/ndex.png';
import ndexLogoUnderline from '../images/ndexLogoUnderline.png';

import styles from './pageStyles/index.module.css';

import ccbbLogo from '../images/ccbbLogo.png';
import ucsdLogo from '../images/ucsdsomLogo.png';
import willseyLogo from '../images/willseyLogo.png';
import winLogo from '../images/winLogo.png';

const contrastBackgroundColor = 'rgba(65,182,255, 0.25)';
const contrastTextColor = 'black';

const IndexPage = () => (
  <Layout backgroundColor={contrastBackgroundColor}>
    <SEO title='Molecular networks underlying autism and congenital heart disease' />
    <TopPanel>
      <HorizontalTitle
        title={
          <>
            <span style={{ display: 'inline-block' }}>
              Molecular networks underlying autism{' '}
            </span>
            <span style={{ display: 'inline-block' }}>
              and congenital heart disease
            </span>
          </>
        }
        subtitle={
          <span style={{ display: 'inline-block' }}>
            View in <a href='#ndex' />
            <a href='#ndex'>
              <div className={styles.ndexLogo}>
                <img
                  src={ndexLogo}
                  className={styles.noUnderlineLogo}
                  alt='NDEx'
                />
                <img
                  src={ndexLogoUnderline}
                  className={styles.underlineLogo}
                  alt='NDEx'
                />
              </div>
            </a>
            :
          </span>
        }
      />
      <HorizontalButtonsContainer>
        <ButtonLink
          text='ASD-CHD systems map'
          link='http://www.ndexbio.org/#/network/5109757e-a5d6-11ea-aaef-0ac135e8bacf?accesskey=7774dbc59127289d2d471de0b3d1be0a45c49c275679f61ddd3f018a500b1574'
          vertical={false}
        />
        <ButtonLink
          text='ASD-CHD gene network'
          link='http://ndexbio.org/#/network/cedacca2-8f2c-11ea-aaef-0ac135e8bacf?accesskey=6aae3aa35edff96125195c0573c912aac24c1cf3baa47786e0ff7490d5be575f'
          vertical={false}
        />
      </HorizontalButtonsContainer>
    </TopPanel>

    <Panel backgroundColor='white' textColor='rgba(0, 0, 0, 0.8)'>
      <h2>
        Genetic variants in autism and congenital heart disease converge on
        common molecular networks and implicate SCN2A as a shared risk gene
      </h2>
      <p>
        Patients with congenital heart disease (CHD) have elevated incidence of
        neurodevelopmental disorders, including autism spectrum disorders (ASD).
        While there is clear evidence for shared genetic risk, the extent to
        which these disorders share molecular mechanisms remains unknown. Here
        we report that de novo coding variants from these disorders converge on
        genes interconnected by a common ASD-CHD molecular network. Variants in
        these genes are overrepresented in patients from an independent
        replication cohort with comorbid brain and heart conditions. The network
        reveals a hierarchy of shared functions including chromatin
        modification, MAPK/Notch signaling, and an unanticipated role for ion
        channels, and it uncovers links between rare and common variants in ASD.
        Mutagenesis in Xenopus tropicalis further validates a subset of shared
        risk genes as essential to brain and heart morphogenesis, including the
        sodium channel SCN2A, suggesting that ion transport is a convergent
        developmental pathway carrying risk for both disorders. This study
        provides a framework for identifying novel risk genes and pathways
        involved in comorbid conditions.
      </p>
    </Panel>
    <Panel
      backgroundColor={contrastBackgroundColor}
      textColor={contrastTextColor}
    >
      <h2>Supporting Code</h2>
      <p>
        {
          'Comprehensive Jupyter notebooks and supporting code to reproduce all analyses are available on '
        }
        <LinkOut link='https://github.com/ucsd-ccbb/ASD_combined_network_analysis'>
          Github
        </LinkOut>
        {'.'}
      </p>
    </Panel>
    <Panel>
      <a id='ndex'>
        <h2>How to download</h2>
      </a>
      <p>
        {'NDEx, the Network Data Exchange ('}
        <LinkOut link='http://ndexbio.org'>www.ndexbio.org</LinkOut>
        {', Pratt et. al. 2017 '}
        <LinkOut link='https://dx.doi.org/10.1158/0008-5472.CAN-17-0606'>
          DOI: 10.1158/0008-5472.CAN-17-0606
        </LinkOut>
        {
          '), is an online commons for biological networks where networks of many types and formats can be shared, accessed, and stored by users and applications. NDEx is tightly integrated with Cytoscape ('
        }
        <LinkOut link='https://cytoscape.org/'>https://cytoscape.org/</LinkOut>
        {
          '), and the ASD-CHD systems map and ASD-CHD gene networks can be viewed in NDEX and downloaded to Cytoscape by clicking the “Open in Cytoscape” button at the bottom-right of the web page.'
        }
      </p>
    </Panel>
    <Panel
      backgroundColor={contrastBackgroundColor}
      textColor={contrastTextColor}
    >
      <h2>Collaborators</h2>
      <div className={styles.logosContainer}>
        <LinkOut link='http://idekerlab.ucsd.edu/'>
          <img
            alt='UCSD School of Medicine Logo'
            src={ucsdLogo}
            className={styles.bigLogo}
            style={{ marginTop: '2.25em' }}
          />
        </LinkOut>
        <LinkOut link='http://compbio.ucsd.edu/'>
          <img alt='CCBB Logo' src={ccbbLogo} className={styles.bigLogo} />
        </LinkOut>
      </div>
      <div className={styles.logosContainer}>
        <LinkOut link='https://weill.ucsf.edu/'>
          <img
            alt='Weill Institute of Neuroscience Logo'
            src={winLogo}
            className={styles.bigLogo}
            style={{ marginTop: '1em' }}
          />
        </LinkOut>
        <LinkOut link='https://willseylab.com/'>
          <img
            alt='Willsey Lab Logo'
            src={willseyLogo}
            className={styles.bigLogo}
          />
        </LinkOut>
      </div>
    </Panel>
  </Layout>
);

export default IndexPage;
