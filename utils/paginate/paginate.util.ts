import { PaginatedData } from "./paginate.model";

export function paginate<T>(items: T[], page: number): PaginatedData<T> {
  const limit = 5;
  const total = items.length;
  const totalPage = Math.ceil(total / limit);

  return {
    data: items.splice((page - 1) * limit, limit),
    meta: {
      page,
      perPage: limit,
      prevPage: page - 1 ? page - 1 : null,
      nextPage: totalPage > page ? page + 1 : null,
      total,
      totalPage,
    },
  };
}
