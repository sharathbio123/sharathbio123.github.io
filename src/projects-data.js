/**
 * Portfolio projects.
 *
 * To add a project:
 * 1. Create public/projects/<id>/ with cover image (+ optional gallery images / video)
 * 2. Append an object below matching this shape
 * 3. Redeploy — the Projects grid and detail page update automatically
 *
 * Fields:
 * - id            URL slug (used as project.html?id=<id>)
 * - title         Card + detail heading
 * - summary       Short card blurb
 * - description   Longer detail paragraphs (array of strings)
 * - cover         Path under /public (image shown on card + detail hero)
 * - video         Optional mp4/webm path or null
 * - gallery       Optional extra image paths
 * - tags          Short labels on the card
 * - protein       Structure + scientific metadata shown on the detail page
 * - links         Optional { label, href } buttons
 */
export const projects = [
  {
    id: 'peptide-md',
    title: 'Therapeutic Peptide MD Simulations',
    summary:
      'Molecular dynamics of therapeutic peptides to assess conformational stability, binding poses, and solvent interactions.',
    description: [
      'At UR Advanced Therapeutics I support peptide-focused molecular modeling with advanced MD simulations. The goal is to understand how candidate sequences behave in solution and near their intended targets before wet-lab iteration.',
      'Trajectories are analyzed for secondary-structure persistence, contact maps, RMSD/RMSF profiles, and binding-pocket occupancy. Insights feed lead prioritization and sequence refinement.',
    ],
    cover: '/projects/peptide-md/cover.svg',
    video: '/projects/peptide-md/preview.mp4',
    gallery: ['/projects/peptide-md/gallery-1.svg', '/projects/peptide-md/gallery-2.svg'],
    tags: ['Molecular Dynamics', 'Peptides', 'GROMACS'],
    protein: {
      name: 'Therapeutic peptide candidate',
      pdbId: '1L2Y',
      organism: 'Designed / model system',
      method: 'Explicit-solvent MD (NPT)',
      resolution: 'NMR reference fold (Trp-cage)',
      bindingSite: 'Compact hydrophobic core + solvent-exposed polar face',
      tools: ['GROMACS', 'MDAnalysis', 'PyMOL'],
      highlights: [
        'Stable helical segments retained across replicate runs',
        'Contact persistence used to rank sequence variants',
        'Solvent-accessible surface mapped for formulation clues',
      ],
    },
    links: [],
  },
  {
    id: 'virtual-screening',
    title: 'High-Throughput Virtual Screening Pipeline',
    summary:
      'Automated HPC workflows for docking massive compound libraries and cheminformatics triage of hit lists.',
    description: [
      'During my postdoc at Soongsil University I built automated scripts for high-throughput virtual screening across large ligand libraries on HPC resources.',
      'The pipeline handles ligand preparation, docking batch submission, pose filtering, and cheminformatics enrichment so medicinal chemists receive ranked, chemically sensible shortlists.',
    ],
    cover: '/projects/virtual-screening/cover.svg',
    video: null,
    gallery: [
      '/projects/virtual-screening/gallery-1.svg',
      '/projects/virtual-screening/gallery-2.svg',
    ],
    tags: ['Docking', 'HPC', 'Cheminformatics'],
    protein: {
      name: 'Kinase-like screening target',
      pdbId: '1M17',
      organism: 'Homo sapiens (EGFR kinase domain model)',
      method: 'Structure-based docking + ligand filters',
      resolution: 'Crystal structure reference',
      bindingSite: 'ATP-binding cleft / hinge region',
      tools: ['AutoDock / Vina', 'RDKit', 'HPC batch scripts'],
      highlights: [
        'Library-scale docking orchestrated on HPC queues',
        'PAINS / property filters reduce false positives',
        'Pose clusters exported for visual inspection',
      ],
    },
    links: [],
  },
  {
    id: 'multiomics-pipeline',
    title: 'Multi-Omics Analysis Pipelines',
    summary:
      'Reproducible pipelines that connect molecular modeling signals with multi-omics readouts for translational decisions.',
    description: [
      'In parallel with structure work, I develop multi-omics analysis pipelines that help translate computational hypotheses into biomarker-aware interpretations.',
      'The emphasis is on transparent, version-controlled workflows that collaborators can re-run and extend as new cohorts arrive.',
    ],
    cover: '/projects/multiomics-pipeline/cover.svg',
    video: null,
    gallery: ['/projects/multiomics-pipeline/gallery-1.svg'],
    tags: ['Multi-Omics', 'Pipelines', 'Python'],
    protein: {
      name: 'Pathway-centric protein set',
      pdbId: '1T46',
      organism: 'Homo sapiens (ABL kinase reference)',
      method: 'Integrative omics + structure context',
      resolution: 'Crystal structure reference',
      bindingSite: 'Catalytic and regulatory interfaces',
      tools: ['Python', 'pandas', 'scanpy / custom scripts'],
      highlights: [
        'Modular ingest for transcriptomic and proteomic tables',
        'Differential signals mapped onto structural neighborhoods',
        'Reusable notebooks for collaborator hand-off',
      ],
    },
    links: [],
  },
];

export function getProjectById(id) {
  return projects.find((project) => project.id === id) || null;
}
