import { fetchApiGetEthRate } from "../fetchApiGetEthRate";

describe("Testing fetchApiGetEthRate function", () => {
  it("Should return success response", async () => {
      const mockSuccessResponse = { ethereum: {usd: 2789.12} };
      const mockJsonPromise = Promise.resolve(mockSuccessResponse);
      const mockFetchPromise = Promise.resolve({
          ok: true,
          json: () => mockJsonPromise
      });
      var globalRef: any = global;
      globalRef.fetch = jest.fn().mockImplementation(() => mockFetchPromise);
      const resp = await fetchApiGetEthRate();
      expect(resp).toEqual({ isError: false, data: { ethereum: {usd: 2789.12} } });
  });

  it("should return error response", async () => {
      const mockSuccessResponse = { message: "Error" };
      const mockJsonPromise = Promise.resolve(mockSuccessResponse);
      const mockFetchPromise = Promise.resolve({
          ok: false,
          json: () => mockJsonPromise
      });
      var globalRef: any = global;
      globalRef.fetch = jest.fn().mockImplementation(() => mockFetchPromise);
      const resp = await fetchApiGetEthRate();
      expect(resp).toEqual({ isError: true, error: { message: "Error" } });
  });

  it("should return error response from catch block", async () => {
      const mockSuccessResponse = { message: "Error" };
      const mockJsonPromise = Promise.reject(mockSuccessResponse);
      const mockFetchPromise = Promise.reject({
          ok: false,
          json: () => mockJsonPromise
      });
      var globalRef: any = global;
      globalRef.fetch = jest.fn().mockImplementation(() => mockFetchPromise);
      const resp = await fetchApiGetEthRate();
      expect(resp).toEqual({ isError: true, error: undefined });
  });
});

export {};