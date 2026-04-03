import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
const PaginatedComponent = ({
  page,
  setPage,
}: {
  page: number;
  setPage: (prev: boolean) => void;
}) => {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious onClick={() => page > 1 && setPage(true)} />
        </PaginationItem>
        {page > 2 && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}
        {page > 1 && (
          <PaginationItem>
            <PaginationLink onClick={() => setPage(true)}>
              {page - 1}
            </PaginationLink>
          </PaginationItem>
        )}

        <PaginationItem>
          <PaginationLink aria-disabled={true} isActive>
            {page}
          </PaginationLink>
        </PaginationItem>
        {page < 8 && (
          <PaginationItem>
            <PaginationLink onClick={() => setPage(false)}>
              {page + 1}
            </PaginationLink>
          </PaginationItem>
        )}

        {page < 8 && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}

        <PaginationItem>
          <PaginationNext onClick={() => page < 8 && setPage(false)} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default PaginatedComponent;