/**
 * Portfolio projects.
 *
 * To add a project:
 * 1. Put your recorded video + snapshot images in public/projects/<id>/
 * 2. Append an object below
 * 3. Redeploy — the Projects grid and detail page update automatically
 *
 * Fields:
 * - id            URL slug (project.html?id=<id>)
 * - title         Card + detail heading
 * - summary       Short card blurb
 * - description   Longer detail paragraphs (array of strings)
 * - cover         Cover / thumbnail image path
 * - video         Recorded project video path (mp4/webm) or null
 * - snapshots     Image gallery: string paths or { src, caption }
 * - tags          Short labels on the card
 * - details       Sidebar facts (target, method, tools, highlights)
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
    snapshots: [
      { src: '/projects/peptide-md/gallery-1.svg', caption: 'RMSD / RMSF trajectory snapshot' },
      { src: '/projects/peptide-md/gallery-2.svg', caption: 'Residue contact map snapshot' },
    ],
    tags: ['Molecular Dynamics', 'Peptides', 'GROMACS'],
    details: {
      target: 'Therapeutic peptide candidate',
      method: 'Explicit-solvent MD (NPT)',
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
    snapshots: [
      { src: '/projects/virtual-screening/gallery-1.svg', caption: 'Top docking pose snapshot' },
      { src: '/projects/virtual-screening/gallery-2.svg', caption: 'Hit triage funnel snapshot' },
    ],
    tags: ['Docking', 'HPC', 'Cheminformatics'],
    details: {
      target: 'Kinase-like screening target',
      method: 'Structure-based docking + ligand filters',
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
    snapshots: [
      { src: '/projects/multiomics-pipeline/gallery-1.svg', caption: 'Pipeline stages overview' },
    ],
    tags: ['Multi-Omics', 'Pipelines', 'Python'],
    details: {
      target: 'Pathway-centric protein set',
      method: 'Integrative omics analysis',
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
