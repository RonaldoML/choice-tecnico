
import { useMemo } from "react";
import { useGetFiles } from "../hooks/useGetFiles";
import { CustomTable } from "./CustomTable";
import { getRows } from "../utils/process-data";
import { ErrorBanner } from "./ErrorBanner";
import { NoResultsBanner } from "./NoResultsBanner";
import { LoadingBanner } from "./LoadingBanner";

export const TablePanel = () => {

  const {
    isLoading,
    isError,
    error,
    files,
  } = useGetFiles();

  const columns = ["File Name", "Text", "Number", "Hex"];

  const rows = useMemo(() => {
    return files?.map(file => getRows(file)).flat(Infinity)
  }, [files]);

  const displayTable = !isLoading && !isError && Array.isArray(rows) && rows.length > 0;
  const displayNoResultBanner = !isLoading && !isError && !displayTable;



  return (
    <section>
      {
        isLoading && <LoadingBanner />
      }
      {
        isError && <ErrorBanner error={error} />
      }
      {
        displayNoResultBanner && <NoResultsBanner />
      }
      {
        displayTable && <CustomTable columns={columns} rows={rows} />
      }
    </section>
  );
};
