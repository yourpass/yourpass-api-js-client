import { Viewer, Permission } from "./viewer";

describe("Viewer model test", () => {
  it("simple permission test", () => {
    const viewer = new Viewer({
      id: "testUserId",
      email: "email@email.email",
      name: "Testan Tester",
      isAdmin: false,
      projects: {
        test: Permission.PROJECT_ACCESS,
        test2: Permission.PROJECT_ACCESS + Permission.PASS_READ,
        test3: 34,
      },
    });

    expect(viewer.hasPermision(Permission.PROJECT_ACCESS)).toEqual(true);
    expect(viewer.hasPermision(Permission.PASS_READ)).toEqual(true);
    expect(
      viewer.hasPermisionOnProject("test", Permission.PROJECT_ACCESS),
    ).toEqual(true);
    expect(viewer.hasPermisionOnProject("test2", Permission.PASS_READ)).toEqual(
      true,
    );
    expect(viewer.hasPermisionOnProject("test3", Permission.PASS_READ)).toEqual(
      true,
    );

    expect(viewer.hasPermision(Permission.IMAGE_MANAGE)).toEqual(false);
    expect(viewer.hasPermision(Permission.IMAGE_MANAGE)).toEqual(false);
    expect(
      viewer.hasPermisionOnProject("test", Permission.IMAGE_MANAGE),
    ).toEqual(false);
    expect(
      viewer.hasPermisionOnProject("test2", Permission.IMAGE_MANAGE),
    ).toEqual(false);
  });
});
