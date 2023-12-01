import { Button, Flex, Grid } from '@radix-ui/themes';

const repoName = 'sozonome/vite-react-radix-starter';

const CTASection = () => {
  return (
    <Grid justify="center" gap="2">
      <Flex gap="2">
        <a
          href={`https://vercel.com/import/git?s=https://github.com/${repoName}`}
          className="flex items-center"
          target="_blank"
          rel="noreferrer noopener"
        >
          <img
            className="w-23 h-8"
            src="https://vercel.com/button"
            alt="Vercel deploy button"
          />
        </a>

        <a
          href={`https://app.netlify.com/start/deploy?repository=https://github.com/${repoName}`}
          className="flex items-center"
          target="_blank"
          rel="noreferrer noopener"
        >
          <img
            className="w-23 h-8"
            src="https://www.netlify.com/img/deploy/button.svg"
            alt="Netlify deploy button"
          />
        </a>
      </Flex>

      <Flex gap="4" justify="center" align="center">
        <Button asChild color="orange">
          <a
            href={`https://github.com/${repoName}/generate`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Use This Template
          </a>
        </Button>
        <Button asChild variant="ghost">
          <a
            className=" p-2 rounded-3xl text-xs font-semibold"
            href={`https://github.com/${repoName}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Repository
          </a>
        </Button>
      </Flex>
    </Grid>
  );
};

export default CTASection;
